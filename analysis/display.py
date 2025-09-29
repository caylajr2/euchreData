
def print_tricks(tricks):
    print("TRICKS:")
    for trick in tricks:
        print(trick)


def print_bids(bids):
    print("BIDS:")
    for bid in bids:
        print(bid)

# print all bids and tricks
def print_hand(hand):
    print_bids(hand['bids'])
    print_tricks(hand['tricks'])
