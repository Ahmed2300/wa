import glob, re, json

imgs = {}
for fn in glob.glob('_reference/*.html'):
    txt = open(fn, encoding='utf-8').read()
    tags = re.findall(r'<img[^>]+>', txt)
    for tag in tags:
        src_m = re.search(r'src=["\']([^"\']+)["\']', tag)
        alt_m = re.search(r'alt=["\']([^"\']*)["\']', tag)
        if src_m:
            src = src_m.group(1)
            alt = alt_m.group(1) if alt_m else ''
            if src not in imgs:
                imgs[src] = {"file": fn, "alt": alt}

for i, (k, v) in enumerate(imgs.items()):
    print(f"[{i+1}] {v['file']} -> {v['alt'][:90]}")
