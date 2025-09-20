import { useState } from 'react'
import '../styles/cardImageStyle.css'
import BidLogger from './BidLogger'
import TrickLogger from './TrickLogger'


const HandLogger = ({addHandToFile}) => {
    // tricks played in hand, will be moved to hand component and be submitted from there
    const [tricks, setTricks] = useState([]);
    
    // bids in order from first to last bidder, updated in BidLogger
    const [bids, setBids] = useState([]);


    // function to add trick to array of logged tricks, will be moved to hand component
    const addTrickToHand = trick => {
        setTricks(prev => [...prev, trick]);
    }

    // function to add bid to array of logged bids
    const addBidToHand = (bid) => {
        console.log(bid)
        if (bids.length >= 6) {
        alert("Can only have six bids in a hand");
        } else if (bids.length !== 0 && bid.value <= bids.at(-1).value) {
        alert("Bid must be larger than previous bid");
        } else {
        setBids(prev => [...prev, bid]);
        }
        console.log(bids)
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

    return (
        <>
            {/* BidLogger updates the bids array */}
            <h2>Bids</h2>
            <BidLogger bids={bids} addBid={addBidToHand} />
            {/* TrickLogger updates tricks array with each full trick */}
            <h2>Tricks</h2>
            <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} />
            <button type='submit' onClick={() => handleAddHand(bids, tricks)} >Submit Hand</button>
        </>
    )
}

export default HandLogger