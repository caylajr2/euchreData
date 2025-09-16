import '../styles/cardImageStyle.css'


const Card = ({ card }) => {
    // get suit and value from card prop
    const { suit, value } = card;

    return (
        <>
            <div className="card-image" >
                <p className='card-value-top card-value'>{value}</p>
                <img src={suit} alt="suit" />
                <p className='card-value-bottom card-value'>{value}</p>
            </div>
        </>
    )
}

export default Card
