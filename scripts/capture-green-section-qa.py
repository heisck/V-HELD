#!/usr/bin/env python3
import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def capture():
    os.makedirs("qa-screenshots", exist_ok=True)
    proc = subprocess.Popen([
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--remote-debugging-port=9223",
        "http://localhost:3006"
    ])
    time.sleep(2)

    try:
        tabs = []
        for attempt in range(10):
            try:
                req = urllib.request.urlopen("http://127.0.0.1:9223/json")
                tabs = json.loads(req.read().decode())
                print(f"Tabs found: {len(tabs)}")
                break
            except Exception:
                time.sleep(0.5)
        else:
            print("Failed to connect to Chrome")
            return

        ws_url = None
        for t in tabs:
            if t.get("type") == "page":
                ws_url = t.get("webSocketDebuggerUrl")
                break
        
        if not ws_url and tabs:
            ws_url = tabs[0].get("webSocketDebuggerUrl")
            
        print(f"Connecting to ws: {ws_url}")
        if not ws_url:
            print("No ws url found")
            return

        async with websockets.connect(ws_url) as ws:
            # Enable page
            await ws.send(json.dumps({"id": 1, "method": "Page.enable"}))
            await ws.recv()

            # Navigate to localhost:3006
            await ws.send(json.dumps({"id": 2, "method": "Page.navigate", "params": {"url": "http://localhost:3006"}}))
            await ws.recv()
            await asyncio.sleep(2.5)

            # 1440x900 desktop viewport
            await ws.send(json.dumps({
                "id": 3,
                "method": "Emulation.setDeviceMetricsOverride",
                "params": {
                    "width": 1440,
                    "height": 900,
                    "deviceScaleFactor": 1,
                    "mobile": False
                }
            }))
            await ws.recv()

            # Captures list: (name, scroll_y)
            shots = [
                ("qa-screenshots/green_section_top_divider.png", 650),
                ("qa-screenshots/green_section_intro.png", 900),
                ("qa-screenshots/green_section_focus_areas.png", 1500),
                ("qa-screenshots/green_section_why_volunteer.png", 2200),
                ("qa-screenshots/green_section_how_it_works.png", 2900),
            ]

            for idx, (filename, scroll_y) in enumerate(shots):
                await ws.send(json.dumps({
                    "id": 10 + idx * 2,
                    "method": "Runtime.evaluate",
                    "params": {"expression": f"window.scrollTo(0, {scroll_y}); window.scrollY"}
                }))
                await ws.recv()
                await asyncio.sleep(0.5)

                await ws.send(json.dumps({
                    "id": 11 + idx * 2,
                    "method": "Page.captureScreenshot",
                    "params": {"format": "png"}
                }))
                shot_res = json.loads(await ws.recv())
                data = shot_res.get("result", {}).get("data")
                if data:
                    with open(filename, "wb") as f:
                        f.write(base64.b64decode(data))
                    print(f"Captured: {filename} ({os.path.getsize(filename)} bytes)")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(capture())
