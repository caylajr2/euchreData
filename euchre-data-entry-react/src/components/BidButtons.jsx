import { useState } from "react";
import {biddingSuits, biddingValues} from './imageConstants.jsx'
import '../styles/bidButtonStyle.css'

const BidButtons = ({ addBid }) => {
    const [selectedSuit, setSelectedSuit] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const handleSubmitBid = (e) => {
        e.preventDefault();
        if (selectedSuit === "" || selectedValue === "") {
            alert("Must select suit and value");
        } else {
            addBid(selectedSuit, selectedValue );
            setSelectedSuit("");
            setSelectedValue("");
        }
    }

    return (
        <form onSubmit={handleSubmitBid}>
            
            <div className="bid-buttons-section">
                {biddingValues.map((value, idx) => (
                <label key={idx}>
                    <input 
                        type="radio" 
                        name="value-choice" 
                        value={value.name} 
                        checked={selectedValue === value.name} 
                        onChange={(e) => setSelectedValue(e.target.value)} 
                        className="bid-button-radio"
                    />
                    <img
                        className= "bid-suit-image"
                        src={value.image}
                        alt={`${value.name}`}
                    />
                </label>
                ))}
            </div>
            <div className="bid-buttons-section">
                {biddingSuits.map((suit, idx) => (
                    <label className="bid-button-label" key={idx}>
                        <input 
                            type="radio" 
                            name="suit-choice" 
                            value={suit.name} 
                            checked={selectedSuit === suit.name} 
                            onChange={(e) => setSelectedSuit(e.target.value)} 
                            className="bid-button-radio" 
                        />
                        <img
                            className= "bid-suit-image"
                            src={suit.image}
                            alt={`${suit.name}`}
                        />
                </label>
                ))}
            </div>

            <button type="submit">Add Bid</button>
        </form>
    );

}

export default BidButtons