import { useState } from 'react'
import '../styles/cardImageStyle.css'
import BidLogger from './BidLogger'
import TrickLogger from './TrickLogger'
import {cardSuits, cardValues, biddingSuits, biddingValues} from './imageConstants.jsx'


const HandLogger = ({ addHandToFile }) => {
    const cards = {};
    for (const suit of cardSuits) {
        cards[suit.name] = {};
        for (const value of cardValues) {
            cards[suit.name][value.name] = 2;
        }
    }
    const [deck, setDeck] = useState(cards);
    
    // tricks played in hand, will be moved to hand component and be submitted from there
    const [tricks, setTricks] = useState([]);
    
    // bids in order from first to last bidder, updated in BidLogger
    const [bids, setBids] = useState([]);


    // function to add trick to array of logged tricks, will be moved to hand component
    const addTrickToHand = trick => {
        const newDeck = deck;

        setTricks(prev => [...prev, trick]);
    }

    // function to add bid to array of logged bids
    const addBidToHand = (newSuit, newValue) => {
        if (bids.length >= 6) {
        alert("Can only have six bids in a hand");
        } else if (bids.length !== 0 && newValue <= bids.at(-1).value.value) {
        alert("Bid must be larger than previous bid");
        } else {
            const suit = biddingSuits.find(e => e.name === newSuit);
            const value = biddingValues.find(e => e.name === newValue);
            const newBid = { suit, value }
            setBids(prev => [...prev, newBid]);
        }
    }

    const removeBidFromHand = () => {
        if (bids.length <= 0) {
        alert("Can only have six bids in a hand");
        } else {
        setBids(prev => prev.slice(0,-1));
        }
    }

    const handleAddHand = (bids, tricks) => {
        if (bids.length !== 6 | tricks.length !== 8) {
            alert("incorrect number of bids or tricks in hand")
        } else {
            const simpleTricks = tricks.map(t => t.map(c => {
                const card = { suit: c.suit.name, value: c.value.name };
                return card;
            }))
            
            addHandToFile({bids, tricks: simpleTricks})
        }
    }

    const addCardToDeck = (suit, value) => {
        setDeck(prevDeck => {
            // Create a new deck object
            return {
                ...prevDeck,
                [suit]: {
                ...prevDeck[suit],
                [value]: prevDeck[suit][value] + 1
                }
            };
        });
    }

    const removeCardFromDeck = (suit, value) => {
        setDeck(prevDeck => {
            // Create a new deck object
            return {
                ...prevDeck,
                [suit]: {
                    ...prevDeck[suit],
                    [value]: prevDeck[suit][value] - 1
                }
            };
        });
    }

    return (
        <>
            {/* BidLogger updates the bids array */}
            <h2>Bids</h2>
            <BidLogger bids={bids} addBid={addBidToHand} removeBid={removeBidFromHand} />
            {/* TrickLogger updates tricks array with each full trick */}
            <h2>Tricks</h2>
            <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} deck={deck} addCardToDeck={addCardToDeck} removeCardFromDeck={removeCardFromDeck} />
            <button type='submit' onClick={() => handleAddHand(bids, tricks)} >Submit Hand</button>
        </>
    )
}

export default HandLogger