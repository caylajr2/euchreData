import { useState } from 'react'
import './App.css'
import Trick from './components/Trick'
import CardButtons from './components/CardButtons'
import TrickLogger from './components/TrickLogger'


function App() { 
  const [tricks, setTricks] = useState([]);



  const addTrickToHand = trick => {
    setTricks(prev => [...prev, trick]);
  }
  
  return (
    <>
      <div className="card">
        <TrickLogger tricksPlayed={tricks} addTrick={addTrickToHand} />
      </div>
    </>
  )
}

export default App
