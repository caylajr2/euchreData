import { useState } from 'react'
import Card from './Card'
import CardButtons from './CardButtons'
import Trick from './Trick'

const TrickLogger = ({ tricksPlayed, addTrick, deck, addCardToDeck, removeCardFromDeck }) => {
    // keeps track of cards played in current open trick
    const [cardsPlayed, setCardsPlayed] = useState([])

    // adds a card to the current trick if doesn't already have 6 cards

    const addCardToTrick = (card) => {
        const suit = card.suit.name;
        const value = card.value.name;

        if (cardsPlayed.length === 6) {
            alert("Submit full trick before entering more cards");
        } else if (deck[suit][value] <= 0) {
            alert(`Deck has none of this card (${value},${suit}) left`)
        } else {
            removeCardFromDeck(suit, value);
            setCardsPlayed(prev => [...prev, card]);
        }
    }

    const removeCardFromTrick = () => {
        if (cardsPlayed.length <= 0) {
            alert('no cards to remove from trick');
        } else {
            const card = cardsPlayed[cardsPlayed.length - 1];
            const suit = card.suit.name;
            const value = card.value.name;

            if (deck[suit][value] >= 2) {
                alert(`Deck has two of this card (${value},${suit}) left`)
            } else {
                addCardToDeck(suit, value);
                setCardsPlayed(prev => prev.slice(0, -1));
            }

        }
    }

    // adds trick to the tricks state variable (passed in as the prop tricksPlayed)
    // Only updates if trick has 6 cards exactly
    // Then clears the current trick of cards so it can be updated with the next trick
    const handleAddTrick = (trick) => {
        if (trick.length !== 6) {
            alert("Invalid trick: there are not 6 cards");
        } else if (tricksPlayed.length === 8) {
            alert("Trick is full")
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
            <Trick cardsPlayed={cardsPlayed} removeCardFromTrick={removeCardFromTrick} />
            <button onClick={() => removeCardFromTrick()}>Remove last card</button>
            {/* adds trick to hand */}
            <button onClick={() => handleAddTrick(cardsPlayed)}>Log Trick</button>
            {/* component with different buttons for adding cards to a trick */}
            <CardButtons addCardToTrick={addCardToTrick} />
        </>
    )
}

export default TrickLogger
