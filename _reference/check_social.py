import re

html = open('_reference/social_grid.html', encoding='utf-8').read()
imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html)
for i, src in enumerate(imgs):
    print(f"Tile {i+1}: {src[:80]}...")
