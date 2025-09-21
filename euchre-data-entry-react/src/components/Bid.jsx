import '../styles/cardImageStyle.css'
import { biddingSuits, bidValues } from './imageConstants';

const Bid = ({ bid }) => {
    // get suit and value from bid prop
    const { suit, value } = bid;
    const suitImg = biddingSuits.find(s => s.name === suit)?.image;
    const valueImg = bidValues.find(v => v.name === value)?.image;

    return (
        <>
            <div className="bid-entry">
                <img src= {valueImg} alt={value}/>
                <img src={suitImg} alt={suit} />
            </div>
        </>
    )
}

export default Bid
