SP = 'spade'
HE = 'heart'
DI = 'diamond'
CL = 'club'
LO = 'low'
HI = 'high'

A = 'Ace'
K = 'King'
Q = 'Queen'
J = 'Jack'
T = '10'
N = '9'



TRUMP = {
    SP : {
        SP:[(J, SP), (J, CL), (A, SP), (K, SP), (Q, SP), (T, SP), (N, SP)],
        HE:[(A, HE), (K, HE), (Q, HE),(J, HE),  (T, HE), (N, HE)],
        DI:[(A, DI), (K, DI), (Q, DI), (J, DI), (T, DI), (N, DI)],
        CL:[(A, CL), (K, CL), (Q, CL), (T, CL), (N, CL)]
    },
    HE : {
        HE: [(J, HE), (J, DI), (A, HE), (K, HE), (Q, HE), (T, HE), (N, HE)],
        SP: [(A, SP), (K, SP), (Q, SP), (J, SP), (T, SP), (N, SP)],
        DI: [(A, DI), (K, DI), (Q, DI), (T, DI), (N, DI)],
        CL: [(A, CL), (K, CL), (Q, CL), (J, CL), (T, CL), (N, CL)]
    },
    DI : {
        DI: [(J, DI), (J, HE), (A, DI), (K, DI), (Q, DI), (T, DI), (N, DI)],
        SP: [(A, SP), (K, SP), (Q, SP), (J, SP), (T, SP), (N, SP)],
        HE: [(A, HE), (K, HE), (Q, HE), (T, HE), (N, HE)],
        CL: [(A, CL), (K, CL), (Q, CL), (J, CL), (T, CL), (N, CL)]
    },
    CL : {
        CL: [(J, CL), (J, SP), (A, CL), (K, CL), (Q, CL), (T, CL), (N, CL)],
        SP: [(A, SP), (K, SP), (Q, SP), (T, SP), (N, SP)],
        HE: [(A, HE), (K, HE), (Q, HE), (J, HE), (T, HE), (N, HE)],
        DI: [(A, DI), (K, DI), (Q, DI), (J, DI), (T, DI), (N, DI)]
    },
    HI : {
        SP: [(A, SP), (K, SP), (Q, SP), (J, SP), (T, SP), (N, SP)],
        HE: [(A, HE), (K, HE), (Q, HE), (J, HE), (T, HE), (N, HE)],
        DI: [(A, DI), (K, DI), (Q, DI), (J, DI), (T, DI), (N, DI)],
        CL: [(A, CL), (K, CL), (Q, CL), (J, CL), (T, CL), (N, CL)]
    },
    LO : {
        SP: [(N, SP), (T, SP), (J, SP), (Q, SP), (K, SP), (A, SP)],
        HE: [(N, HE), (T, HE), (J, HE), (Q, HE), (K, HE), (A, HE)],
        DI: [(N, DI), (T, DI), (J, DI), (Q, DI), (K, DI), (A, DI)],
        CL: [(N, CL), (T, CL), (J, CL), (Q, CL), (K, CL), (A, CL)]
    }
}






# Determine winning bid suit and value
def get_winning_bid(bids):
    winning_bid = bids[0]
    winning_bid_idx = 0
    for idx, bid in enumerate(bids):
        if bid[2] > winning_bid[2]:
            winning_bid = bid
            winning_bid_idx = idx
    return winning_bid, winning_bid_idx






# Determine winner between previous winner and next card given trump
def winner_of_2(winner, new_card, trump):
    card_ranks = TRUMP[trump]
    notrump = trump == 'high' or trump == 'low'
    if not notrump and winner in card_ranks[trump] and new_card in card_ranks[trump]:
        if card_ranks[trump].index(winner) < card_ranks[trump].index(new_card):
            return winner
        else:
            return new_card
    elif not notrump and winner in card_ranks[trump]:
        return winner
    elif not notrump and new_card in card_ranks[trump]:
        return new_card
    elif winner[1] != new_card[1]:
        return winner
    else:
        suit = card_ranks[winner[1]]
        if suit.index(winner) < suit.index(new_card):
            return winner
        else:
            return new_card

def winner_of_trick(trick, trump):
    winner = trick[0]
    winner_idx = 0
    for idx, card in enumerate(trick):
        new_winner = winner_of_2(winner, card, trump)
        if  new_winner != winner:
            winner_idx = idx
            winner = new_winner
    return winner, winner_idx

def reconstruct_hands(tricks, trump, lead_player):
    players=[[],[],[],[],[],[]]
    for trick in tricks:
        winner, winner_idx = winner_of_trick(trick, trump)
        for idx, card in enumerate(trick):
            player_idx = (idx + lead_player) % 6
            players[player_idx].append(card)
        lead_player = (lead_player + winner_idx) % 6
    for idx, player in enumerate(players):
        print('Player',(idx + 1), ':', player)
    return players