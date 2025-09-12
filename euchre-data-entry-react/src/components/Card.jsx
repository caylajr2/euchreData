import react from 'react'


const Card = ({ card }) => {
    const { suit, value } = card;
    return (
        <>
            <div className="card-image">
                <p>{value}</p>
                <img src={"../assets/" + suit + ".png"} alt={suit} />
                <p>{value}</p>
            </div>
        </>
    )
}

export default Card
