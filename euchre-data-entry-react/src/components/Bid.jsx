import '../styles/cardImageStyle.css'


const Bid = ({ bid }) => {
    // get suit and value from bid prop
    const { suit, value } = bid;

    return (
        <>
            <div>
                <p>{value}</p>
                <img src={suit} alt={suit} />
            </div>
        </>
    )
}

export default Bid
