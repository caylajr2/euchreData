import react from 'react'
import Card from './Card'

const CardButton = ({ card, addToTrick }) => {

    return (
        <>
            <button onClick={() => addToTrick(card)}>
                <Card card={card}/>
            </button>
        </>
    )
}

export default CardButton
