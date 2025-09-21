import '../styles/cardImageStyle.css'
import Bid from './Bid'
import BidButtons from './BidButtons'

const BidLogger = ({ bids, addBid, removeBid }) => {

    return (
        <>
            <ul>
                {bids.map(e => 
                    <li>
                        <Bid bid={e} />
                    </li>
                )}
            </ul>
            <button onClick={removeBid}>Remove last bid</button>
            <BidButtons addBid={ addBid } />
        </>
    )
}

export default BidLogger