import react from 'react'
import '../styles/cardImageStyle.css'
import spade from '../assets/spade.png'
import heart from '../assets/heart.png'
import diamond from '../assets/diamond.png'
import club from '../assets/club.png'


const Card = ({ card }) => {
    const { suit, value } = card;
    let suitImage;
    if (suit === "spade") {
        suitImage = spade;
    } else if (suit === "heart") {
        suitImage = heart;
    } else if (suit === "diamond") {
        suitImage = diamond;
    } else if (suit === "club") {
        suitImage = club;
    }

    return (
        <>
            <div className="card-image" >
                <p className='card-value-top card-value'>{value}</p>
                <img src={suitImage} alt={suit} />
                <p className='card-value-bottom card-value'>{value}</p>
            </div>
        </>
    )
}

export default Card
