import json, os

data = json.load(open('_reference/extracted_assets.json', encoding='utf-8'))
for i, (url, info) in enumerate(data.items()):
    print(f"[{i+1}] In {info['files']}: {url[:80]}...")
