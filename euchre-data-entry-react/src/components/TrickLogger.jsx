import { useState } from 'react'
import Card from './Card'
import CardButtons from './CardButtons'
import Trick from './Trick'

const TrickLogger = ({ tricksPlayed, addTrick }) => {
    const [cardsPlayed, setCardsPlayed] = useState([])
    const addCardToTrick = (card) => {
        if (cardsPlayed.length === 6) {
            alert("Submit full trick before entering more cards");
        } else {
            setCardsPlayed(prev => [...prev, card])
            console.log(`${card.suit} ${card.value}`)
        }
    }

    const handleAddTrick = (trick) => {
        if (trick.length !== 6) {
            alert("Invalid trick: there are not 6 cards");
        } else {
            addTrick(trick);
            setCardsPlayed([]);
        }
    }

    return (
        <>
            <ul>
                {tricksPlayed.map(e => <li><Trick cardsPlayed={e}/></li>)}
            </ul>
            <Trick cardsPlayed={cardsPlayed} />
            <button onClick={() => handleAddTrick(cardsPlayed)}>Log Trick</button>
            <CardButtons addCardToTrick={addCardToTrick} />
        </>
    )
}

export default TrickLogger
