import CardButton from './CardButton'
import '../styles/cardImageStyle.css'
import '../styles/trickStyle.css'

import {suits, values} from './imageConstants.jsx'

const CardButtons = ({ addCardToTrick }) => {
    // array of all possible cards that could be added to trick
    const cardButtons = [];
    for (const suit of suits) {
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
                        <CardButton card={{suit:e.suit,value: e.value}} addToTrick={addCardToTrick}/>
                    </li>
                )}
            </ul>
        </>
    )
}

export default CardButtons
