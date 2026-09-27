import os, glob, re, json

images = {}
for html_file in glob.glob("*.html"):
    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()
    found = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', content)
    for src in found:
        alt_match = re.search(r'alt=["\']([^"\']*)["\']', content)
        alt = alt_match.group(1) if alt_match else ""
        if src not in images:
            images[src] = {"files": [html_file], "alt": alt}
        else:
            if html_file not in images[src]["files"]:
                images[src]["files"].append(html_file)

print(f"Total unique images: {len(images)}")
with open("extracted_assets.json", "w", encoding="utf-8") as out:
    json.dump(images, out, indent=2)

for i, (k, v) in enumerate(list(images.items())[:10]):
    print(f"[{i+1}] {k[:80]}... (in {v['files']})")
