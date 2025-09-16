import '../styles/cardImageStyle.css'
import Bid from './Bid'
import BidButtons from './BidButtons'

const BidLogger = ({ bids, addBid }) => {
    // get suit and value from bid prop



    return (
        <>
            <ul>
                {bids.map(e => <li><Bid bid={e} /></li>)}
            </ul>
            <BidButtons addBid={ addBid } />
        </>
    )
}

export default BidLogger