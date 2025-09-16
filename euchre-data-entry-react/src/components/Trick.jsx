import Card from './Card'
import '../styles/trickStyle.css'
import '../styles/cardImageStyle.css'

const Trick = ({ cardsPlayed }) => {
    

    return (
        <>
            <ul className='trickRow'>
                {cardsPlayed.map(e => <li className="playedCard"><Card card={e}/></li>)}
            </ul>
            {/* <CardButton card={{suit:'heart',value: 'A'}} addToTrick={addCardToTrick}/>
            <CardButton card={{suit:'heart',value: 'K'}} addToTrick={addCardToTrick}/> */}
        </>
    )
}

export default Trick
