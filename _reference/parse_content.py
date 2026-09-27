import os, re, json

data = {}

def extract_section(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Extract headings
    h1s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.S)]
    h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.S)]
    h3s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h3[^>]*>(.*?)</h3>', html, re.S)]
    
    # Extract paragraphs
    ps = [re.sub(r'<[^>]+>', '', p).strip() for p in re.findall(r'<p[^>]*>(.*?)</p>', html, re.S)]
    ps = [p for p in ps if len(p) > 5]
    
    # Extract images
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html)
    
    return {
        "h1": h1s,
        "h2": h2s,
        "h3": h3s,
        "paragraphs": ps,
        "images": list(dict.fromkeys(imgs))
    }

for name in ['hero_fr', 'home_en', 'portfolio', 'studio', 'services', 'contact', 'social_grid']:
    path = os.path.join('_reference', f'{name}.html')
    if os.path.exists(path):
        data[name] = extract_section(path)

with open('_reference/extracted_content.json', 'w', encoding='utf-8') as out:
    json.dump(data, out, ensure_ascii=False, indent=2)

print("Extracted content successfully saved to _reference/extracted_content.json")
