import urllib.request, json

data = json.load(open('_reference/extracted_assets.json', encoding='utf-8'))
for i, url in enumerate(data.keys()):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=5)
        print(f"[{i+1}] Status: {res.status}, Content-Type: {res.headers.get('Content-Type')}, Size: {len(res.read())}")
    except Exception as e:
        print(f"[{i+1}] Error: {e}")
