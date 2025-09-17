import CardButton from './CardButton'
import '../styles/cardImageStyle.css'
import '../styles/trickStyle.css'
import {suits, values} from './imageConstants.jsx'


const CardButtons = ({ addCardToTrick }) => {
    const cardButtons = [];
    for (const suit of suits) {
        for (const value of values) {
            cardButtons.push({ suit, value });
        }
    }

    return (
        <>
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
