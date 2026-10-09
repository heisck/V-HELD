#!/usr/bin/env python3
import asyncio
import base64
import json
import os
import subprocess
import time
import urllib.request
import websockets

async def capture_scrolled():
    proc = subprocess.Popen([
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--remote-debugging-port=9222",
        "http://localhost:3006"
    ])
    time.sleep(2)

    try:
        req = urllib.request.urlopen("http://localhost:9222/json")
        tabs = json.loads(req.read().decode())
        ws_url = None
        for t in tabs:
            if t.get("type") == "page":
                ws_url = t.get("webSocketDebuggerUrl")
                break
        
        if not ws_url:
            print("No page tab found")
            return

        async with websockets.connect(ws_url) as ws:
            # Enable page events
            await ws.send(json.dumps({"id": 1, "method": "Page.enable"}))
            await ws.recv()

            # Navigate explicitly
            await ws.send(json.dumps({"id": 2, "method": "Page.navigate", "params": {"url": "http://localhost:3006"}}))
            await ws.recv()
            await asyncio.sleep(2.0)

            # Set viewport size to 1440x900
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

            # Scroll window by 300px
            await ws.send(json.dumps({
                "id": 4,
                "method": "Runtime.evaluate",
                "params": {
                    "expression": "window.scrollTo(0, 300); window.scrollY"
                }
            }))
            res = json.loads(await ws.recv())
            print("Scroll position:", res.get("result", {}).get("result", {}).get("value"))

            # Wait for 500ms transition
            await asyncio.sleep(0.6)

            # Capture screenshot
            await ws.send(json.dumps({
                "id": 5,
                "method": "Page.captureScreenshot",
                "params": {"format": "png"}
            }))
            shot_res = json.loads(await ws.recv())
            data = shot_res.get("result", {}).get("data")
            if data:
                out_path = "docs/build docs/landing-page/qa-screenshots/header_desktop_scrolled.png"
                with open(out_path, "wb") as f:
                    f.write(base64.b64decode(data))
                print(f"Captured scrolled screenshot: {out_path} ({os.path.getsize(out_path)} bytes)")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(capture_scrolled())
