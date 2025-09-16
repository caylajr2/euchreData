import { useState } from "react";
// import suits from './imageConstants.jsx'

const bidValues = [1, 2, 3, 4, 5, 6, 7];
const suits = ['spade', 'heart', 'diamond', 'club', 'high', 'low']

const BidButtons = ({ addBid }) => {
    const [selectedSuit, setSelectedSuit] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const handleSubmitBid = (e) => {
        e.preventDefault();
        addBid({ suit: selectedSuit, value: selectedValue });
        setSelectedSuit("");
        setSelectedValue("");
    }

    return (
        <form onSubmit={handleSubmitBid}>
            <div style={{ display: "flex", gap: "1rem" }}>
                {suits.map((url, idx) => (
                <label key={idx}>
                    <input type="radio" name="choice" value={url} checked={selectedSuit === url} onChange={(e) => setSelectedSuit(e.target.value)} style={{ display: "none" }} />
                    <img
                    src={url}
                    alt={`${url}`}
                    style={{
                        border: selectedSuit === url ? "3px solid blue" : "3px solid transparent",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "100px",
                        height: "100px",
                    }}
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