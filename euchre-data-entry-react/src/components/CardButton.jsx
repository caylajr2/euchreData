import react from 'react'
import Card from './Card'
import '../styles/cardButtonStyle.css'

const CardButton = ({ card, addToTrick }) => {

    return (
        <>
            {/* creates button with suit/value from card prop and ability to add card to trick */}
            <button onClick={() => addToTrick(card)}>
                <Card card={card}/>
            </button>
        </>
    )
}

export default CardButton
