#!/usr/bin/env python3
import json
import os
import sys
import urllib.request

TOKEN = "lf_ca17041e0954e655633681fb6a5c56b9"
MCP_URL = "https://mcp.landingfolio.com/mcp"

def call_mcp(name, arguments):
    req = urllib.request.Request(
        MCP_URL,
        headers={
            "Authorization": f"Bearer {TOKEN}",
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
