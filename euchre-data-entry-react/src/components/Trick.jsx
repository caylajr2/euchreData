import react from 'react'
import CardButton from './CardButton'
import '../styles/trickStyle.css'
import {suits, values } from '../constants'

const Trick = ({ cardsPlayed, addCardToTrick }) => {
    const cardButtons = [];
    for (const suit of suits) {
        for (const value of values) {
            cardButtons.push({ suit, value });
        }
    }

    return (
        <>
            <ul className='cardButtonArray'>
                {cardButtons.map(e => <li><CardButton card={{suit:e.suit,value: e.value}} addToTrick={addCardToTrick}/></li>)}
            </ul>
            {/* <CardButton card={{suit:'heart',value: 'A'}} addToTrick={addCardToTrick}/>
            <CardButton card={{suit:'heart',value: 'K'}} addToTrick={addCardToTrick}/> */}
        </>
    )
}

export default Trick
