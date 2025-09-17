import react from 'react'
import Card from './Card'
import '../styles/cardButtonStyle.css'

const CardButton = ({ card, addToTrick }) => {

    return (
        <>
            <button className="card-button" onClick={() => addToTrick(card)}>
                <Card card={card}/>
            </button>
        </>
    )
}

export default CardButton
