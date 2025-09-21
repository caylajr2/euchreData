import '../styles/cardImageStyle.css'



const Card = ({ cardClass, card }) => {

    const { suit, value } = card;

    return (
        <>
            <div className= {`card-image ${cardClass}`}>
                <img className="card-value top" src={value.image} alt={value.name} />
                <img className="card-suit" src={suit.image} alt="suit" />
                <img className="card-value bottom" src={value.image} alt="value" />
            </div>
        </>
    )
}

export default Card
