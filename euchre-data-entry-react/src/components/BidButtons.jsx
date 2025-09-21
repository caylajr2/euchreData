import { useState } from "react";
import {biddingSuits, bidValues} from './imageConstants.jsx'
import '../styles/bidButtonStyle.css'

const BidButtons = ({ addBid }) => {
    const [selectedSuit, setSelectedSuit] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const handleSubmitBid = (e) => {
        e.preventDefault();
        if (selectedSuit === "" || selectedValue === "") {
            alert("Must select suit and value");
        } else {
            addBid({ suit: selectedSuit, value: selectedValue });
            setSelectedSuit("");
            setSelectedValue("");
        }
    }

    return (
        <form onSubmit={handleSubmitBid}>
            
            <div className="bid-buttons-section">
                {bidValues.map((value, idx) => (
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
                    {/* <p>{ value }</p> */}
                </label>
                ))}
            </div>
            <p>Selected Value: {selectedValue}</p>
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
            <p>Selected Suit: {selectedSuit}</p>

            <button type="submit">Add Bid</button>
        </form>
    );

}

export default BidButtons