#!/usr/bin/env python3
import json
import os
import sys
import urllib.request

MCP_URL = "https://mcp.landingfolio.com/mcp"

def get_token():
    env_token = os.environ.get("LANDINGFOLIO_TOKEN")
    if env_token:
        return env_token
    config_path = os.path.join(os.path.dirname(__file__), "..", "folio-mcp.json")
    if os.path.exists(config_path):
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                cfg = json.load(f)
                auth = cfg.get("mcpServers", {}).get("landingfolio", {}).get("headers", {}).get("Authorization", "")
                if auth.startswith("Bearer "):
                    return auth.split("Bearer ", 1)[1]
                return auth
        except Exception:
            pass
    return ""

def call_mcp(name, arguments):
    token = get_token()
    req = urllib.request.Request(
        MCP_URL,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream"
        },
        data=json.dumps({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "tools/call",
            "params": {
                "name": name,
                "arguments": arguments
            }
        }).encode("utf-8")
    )
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        for item in data.get("result", {}).get("content", []):
            if item.get("type") == "text":
                return json.loads(item["text"])
    return None

def download_file(url, target_path):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    urllib.request.urlretrieve(url, target_path)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: fetch-mcp-references.py <category> [page]")
        sys.exit(1)
    cat = sys.argv[1]
    page = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    res = call_mcp("get_components", {"category": cat, "page": page})
    print(json.dumps(res, indent=2))
