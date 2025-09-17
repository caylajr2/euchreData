import { useState } from 'react'
import Card from './Card'
import CardButtons from './CardButtons'
import Trick from './Trick'

const TrickLogger = ({ tricksPlayed, addTrick }) => {
    // keeps track of cards played in current open trick
    const [cardsPlayed, setCardsPlayed] = useState([])

    // adds a card to the current trick if doesn't already have 6 cards

    const addCardToTrick = (card) => {
        if (cardsPlayed.length === 6) {
            alert("Submit full trick before entering more cards");
        } else {
            setCardsPlayed(prev => [...prev, card]);
            // console.log(`${card.suit.name} ${card.value.name}`);
            // console.log(card);
        }
    }

    // adds trick to the tricks state variable (passed in as the prop tricksPlayed)
    // Only updates if trick has 6 cards exactly
    // Then clears the current trick of cards so it can be updated with the next trick
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
            {/* displays previous tricks in the hand */}
            <ul>
                {tricksPlayed.map((e, index) => 
                    <li>
                        <p>Trick #{index+1}</p>
                        <Trick cardClass="logged-trick" cardsPlayed={e}/>
                    </li>
                )}
            </ul>
            {/* displays cards played on current trick */}
            <Trick cardsPlayed={cardsPlayed} />
            {/* adds trick to hand */}
            <button onClick={() => handleAddTrick(cardsPlayed)}>Log Trick</button>
            {/* component with different buttons for adding cards to a trick */}
            <CardButtons addCardToTrick={addCardToTrick} />
        </>
    )
}

export default TrickLogger
