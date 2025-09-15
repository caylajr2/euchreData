import { useState } from 'react'
import './App.css'
import Trick from './components/Trick'


function App() { 
  const addCardToTrick = (card) => {
        console.log(`${card.suit} ${card.value}`)
    }
  
  return (
    <>
      <div className="card">
        <Trick addCardToTrick={addCardToTrick}/>
      </div>
    </>
  )
}

export default App
