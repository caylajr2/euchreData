import react from 'react'
import Card from './Card'
import '../styles/cardButtonStyle.css'

const CardButton = ({ disabled, card, addToTrick }) => {

    return (
        <>
            <button disabled= {disabled} className="card-button" onClick={() => addToTrick(card)}>
                <Card card={card}/>
            </button>
        </>
    )
}

export default CardButton
