import json

data = json.load(open('_reference/extracted_assets.json', encoding='utf-8'))
keys = list(data.keys())

mapping = {
    "CONTACT_ATELIER_IMG": keys[1],
    "HERO_IMG": keys[3],
    "TOURNON_IMG": keys[4],
    "ST_THOMAS_STAIR_IMG": keys[5],
    "MARAIS_WALL_IMG": keys[6],
    "MARAIS_BATH_IMG": keys[7],
    "BRONZE_HANDLE_IMG": keys[8],
    "SERVICES_HERO_IMG": keys[9],
    "SERVICES_RENOVATION_IMG": keys[10],
    "SERVICES_ARCHI_WORKSHOP_IMG": keys[11],
    "SERVICES_TRAVERTINE_IMG": keys[12],
    "SERVICES_CABINETRY_IMG": keys[13],
    "MONOGRAM_IMG": keys[14],
    "SOCIAL_BRONZE_IMG": keys[15],
    "SOCIAL_STONE_IMG": keys[16],
    "STUDIO_ATELIER_IMG": keys[18],
}

with open('_reference/asset_map.json', 'w', encoding='utf-8') as f:
    json.dump(mapping, f, indent=2)

print("Saved asset_map.json successfully!")
for k, v in mapping.items():
    print(f"{k} = {v[:60]}...")
