import Card from './Card'
import '../styles/trickStyle.css'
import '../styles/cardImageStyle.css'

const Trick = ({ cardsPlayed }) => {
    

    return (
        <>
            <ul>
                {cardsPlayed.map(e => <Card card={e}/>)}
            </ul>
            {/* <CardButton card={{suit:'heart',value: 'A'}} addToTrick={addCardToTrick}/>
            <CardButton card={{suit:'heart',value: 'K'}} addToTrick={addCardToTrick}/> */}
        </>
    )
}

export default Trick
