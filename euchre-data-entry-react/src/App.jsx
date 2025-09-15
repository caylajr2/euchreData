import { useState } from 'react'
import './App.css'
import Trick from './components/Trick'
import CardButtons from './components/CardButtons'


function App() { 
  const [cardsPlayed, setCardsPlayed] = useState([]);

  const addCardToTrick = (card) => {
    setCardsPlayed(prev => [...prev, card])
    console.log(`${card.suit} ${card.value}`)
  }
  
  return (
    <>
      <div className="card">
        <Trick cardsPlayed={cardsPlayed} />
        <CardButtons addCardToTrick={addCardToTrick} />
      </div>
    </>
  )
}

export default App
