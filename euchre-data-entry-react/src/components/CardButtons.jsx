import CardButton from './CardButton'
import '../styles/cardImageStyle.css'
import '../styles/trickStyle.css'

import {cardSuits, cardValues} from './imageConstants.jsx'

const CardButtons = ({ addCardToTrick, deck }) => {
    // array of all possible cards that could be added to trick
    const cardButtons = [];
    for (const suit of cardSuits) {
        for (const value of cardValues) {

            cardButtons.push({ suit, value });
        }
    }

    return (
        <>
            {/* display all cards that could be added to a trick */}
            <ul className='cardButtonArray'>
                {cardButtons.map(e => 
                    <li>
                        <CardButton disabled= {deck[e.suit.name][e.value.name]===0} card={{suit:e.suit,value: e.value}} addToTrick={addCardToTrick}/>
                    </li>
                )}
            </ul>
        </>
    )
}

export default CardButtons
