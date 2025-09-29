import json

file = "../backend/data.json"

# return list of tuples instead of dicts
def parse_trick(trick):
    parsed_trick = []

    for card in trick:
        parsed_trick.append((card['value'],card['suit']))
    return parsed_trick

# return list of tuples instead of dicts
def parse_bids(bids):
    parsed_bids = []
    for bid in bids:
        parsed_bids.append((bid['type'],bid['suit'],bid['value']))
    return parsed_bids


def parse_data(file):
    with open(file, "r") as f:
        hands = json.load(f)
    parsed_hands = []
    for hand in hands:

        bids = parse_bids(hand['bids'])

        tricks = []
        for trick in hand['tricks']:
            tricks.append(parse_trick(trick))
        
        parsed_hands.append({'bids':bids, 'tricks':tricks})
    return parsed_hands
