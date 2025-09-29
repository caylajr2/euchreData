from parsedata import file, parse_data

from display import print_hand

from values import winner_of_trick, reconstruct_hands, get_winning_bid, SP, HE, DI, CL, HI, LO




# Run Analysis here
hands = parse_data(file)

hand = hands[0]

bids = hand['bids']


winning_bid, winning_bid_idx = get_winning_bid(bids)


trump = winning_bid[1]


lead_player = winning_bid_idx


print('Trump suit:', trump)


tricks = hand['tricks']


winner, winner_idx = winner_of_trick(tricks[0], trump)

print("Trick 1:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[1], trump)

print("Trick 2:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[2], trump)

print("Trick 3:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[3], trump)

print("Trick 4:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[4], trump)

print("Trick 5:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[5], trump)

print("Trick 6:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[6], trump)

print("Trick 7:",winner,',',winner_idx)

winner, winner_idx = winner_of_trick(tricks[7], trump)

print("Trick 8:",winner,',',winner_idx)


player_hands = reconstruct_hands(tricks, trump, lead_player)