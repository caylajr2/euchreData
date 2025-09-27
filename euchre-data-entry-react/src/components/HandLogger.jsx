import { useState } from 'react'
import '../styles/cardImageStyle.css'
import BidLogger from './BidLogger'
import TrickLogger from './TrickLogger'
import { cardSuits, cardValues, biddingSuits, biddingValues } from './imageConstants.jsx'

const highestBid = (bids) => {
    let value = 0;
    for (const bid of bids) {
        if (bid.value.value > value) {
            value = bid.value.value
        }
    }
    return value
}

const getBidValue = (type, value) => {
    if (type === 'shoot') {
        return {name:'shoot', value:16,image:''}
    }
    if (type === 'pshoot') {
        return {name:'pshoot', value:12,image:''}
    }
    if (type === 'pass') {
        return {name:'pass', value:0,image:''}
    }
    return biddingValues.find(e => e.name === value)
}


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
        setTricks(prev => [...prev, trick]);
    }

    const removeTrickFromHand = () => {
        if (tricks.length === 0) {
            alert('there are no tricks to remove yet');
        } else {
            const prevTrick = tricks[tricks.length - 1];
            for (const card of prevTrick) {
                addCardToDeck(card.suit.name, card.value.name);
            }
            setTricks(prev => prev.slice(0,-1));
        }
    }

    // function to add bid to array of logged bids
    const addBidToHand = (newType, newSuit, newValue) => {
        const type = newType;

        const suit = type !== "regular" ? {suit:'', image:''} : biddingSuits.find(e => e.name === newSuit);
        const value = getBidValue(type, newValue);
        // const value = type !== "regular" ? undefined : biddingValues.find(e => e.name === newValue);

        const newBid = { type, suit, value }
        console.log('type '+type)
        console.log(newBid)
        console.log(highestBid(bids))
        
        if (bids.length >= 6) {
            alert("Can only have six bids in a hand");
        } else if (type === 'pass' || type === 'pshoot' || type === 'shoot') {
            setBids(prev => [...prev, newBid]);
        } else if (type=="regular"  && value?.value > highestBid(bids)) {
            setBids(prev => [...prev, newBid]);
        } else {
            alert(`an error occured when adding bid {type:${type}, suit:${suit}, value:${value}}`)
        }

    }

    const removeBidFromHand = () => {
        if (bids.length <= 0) {
            alert("There are no bids to remove");
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

            const simpleBids = bids.map(b => { return { type: b.type, suit: b.suit.name, value: b.value.name } })
            
            addHandToFile({ bids: simpleBids, tricks: simpleTricks })
            setBids([])
            setTricks([])
            setDeck(cards)
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
            <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} deck={deck} addCardToDeck={addCardToDeck} removeCardFromDeck={removeCardFromDeck} removeTrickFromHand={removeTrickFromHand} />
            <button type='submit' onClick={() => handleAddHand(bids, tricks)} >Submit Hand</button>
        </>
    )
}

export default HandLogger