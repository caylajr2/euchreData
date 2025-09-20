import { useState } from "react";
import {biddingSuits} from './imageConstants.jsx'
import '../styles/bidButtonStyle.css'

const bidValues = [1, 2, 3, 4, 5, 6, 7];
// const suits = ['spade', 'heart', 'diamond', 'club', 'high', 'low']

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
                {biddingSuits.map((suit, idx) => (
                    <label className="bid-button-label" key={idx}>
                        <input 
                            type="radio" 
                            name="choice" 
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
            <div style={{ display: "flex", gap: "1rem" }}>
                {bidValues.map((value, idx) => (
                <label key={idx}>
                    <input type="radio" name="choice" value={value} checked={selectedValue === value} onChange={(e) => setSelectedValue(e.target.value)} style={{ display: "none" }} />
                    <p>{ value }</p>
                </label>
                ))}
            </div>
            <p>Selected Value: {selectedValue}</p>
            <button type="submit">Add Bid</button>
        </form>
    );

    return (
        <>
            <div>
                <p>{value}</p>
                <img src={suit} alt="suit" />
            </div>
        </>
    )
}

export default BidButtons