import react from 'react'
import '../styles/cardImageStyle.css'


const Card = ({ cardClass, card }) => {
    const { suit, value } = card;
    console.log(suit);

    return (
        <>
            <div className= {`card-image ${cardClass}`}>
                {/* <p className='card-value-top card-value'>{value}</p> */}
                <img className="card-value top" src={value.image} alt={value.name} />
                <img className="card-suit" src={suit.image} alt="suit" />
                <img className="card-value bottom" src={value.image} alt="value" />

                {/* <p className='card-value-bottom card-value'>{value}</p> */}
            </div>
        </>
    )
}

export default Card
