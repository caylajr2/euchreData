import { useState } from 'react'
import './App.css'
import TrickLogger from './components/TrickLogger'


function App() { 
  // tricks played in hand, will be moved to hand component and be submitted from there
  const [tricks, setTricks] = useState([]);


  // function to add trick to array of logged tricks, will be moved to hand component
  const addTrickToHand = trick => {
    setTricks(prev => [...prev, trick]);
  }
  
  return (
    <>
      <div>
        {/* TrickLogger will be within Hand component, updates tricks with each full trick*/}
        <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} />
      </div>
    </>
  )
}

export default App
