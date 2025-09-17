import Card from './Card'
import '../styles/trickStyle.css'
import '../styles/cardImageStyle.css'

const Trick = ({ cardClass, cardsPlayed }) => {
    

    return (
        <>
            <ul className='trickRow'>
                {cardsPlayed.map(e => 
                <li className="playedCard">
                    <Card cardClass={cardClass} card={{suit:e.suit,value: e.value}}/>
                </li>
            )}
            </ul>
            {/* <CardButton card={{suit:'heart',value: 'A'}} addToTrick={addCardToTrick}/>
            <CardButton card={{suit:'heart',value: 'K'}} addToTrick={addCardToTrick}/> */}
        </>
    )
}

export default Trick
