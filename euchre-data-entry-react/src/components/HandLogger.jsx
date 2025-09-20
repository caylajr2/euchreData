import { useState } from 'react'
import '../styles/cardImageStyle.css'
import BidLogger from './BidLogger'
import TrickLogger from './TrickLogger'


const HandLogger = () => {
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

    return (
        <>
            {/* BidLogger updates the bids array */}
            <BidLogger bids={bids} addBid={addBidToHand} />
            {/* TrickLogger updates tricks array with each full trick */}
            <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} />
        </>
    )
}

export default HandLogger