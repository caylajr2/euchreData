import '../styles/cardImageStyle.css'
import { biddingSuits, biddingValues } from './imageConstants';

const Bid = ({ bid }) => {
    // get suit and value from bid prop
    const { suit, value } = bid;

    return (
        <>
            <div className="bid-entry">
                <img src= {value.image} alt={value.name}/>
                <img src={suit.image} alt={suit.name} />
            </div>
        </>
    )
}

export default Bid
