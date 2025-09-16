import Card from './Card'
import '../styles/trickStyle.css'
import '../styles/cardImageStyle.css'

const Trick = ({ cardsPlayed }) => {
    
    return (
        <>
            {/* displays cards in current trick using prop cardsPlayed */}
            <ul className='trickRow'>
                {cardsPlayed.map(e => <li className="playedCard"><Card card={e}/></li>)}
            </ul>
        </>
    )
}

export default Trick
