import Card from './Card'
import '../styles/trickStyle.css'
import '../styles/cardImageStyle.css'

const Trick = ({ cardClass, cardsPlayed }) => {
    
    return (
        <>
            {/* displays cards in current trick using prop cardsPlayed */}
            <ul className='trickRow'>
                {cardsPlayed.map(e => 
                <li className="playedCard">
                    <Card cardClass={cardClass} card={{suit:e.suit,value: e.value}}/>
                </li>
            )}
            </ul>
        </>
    )
}

export default Trick
