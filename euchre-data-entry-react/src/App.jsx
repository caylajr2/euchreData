import { useState } from 'react'
import './App.css'
import TrickLogger from './components/TrickLogger'
import BidButtons from './components/BidButtons';
import BidLogger from './components/BidLogger';


function App() { 
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
      <div>
        <BidLogger bids={bids} addBid={addBidToHand} />
        {/* TrickLogger will be within Hand component, updates tricks with each full trick*/}
        <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} />
      </div>
    </>
  )
}

export default App
