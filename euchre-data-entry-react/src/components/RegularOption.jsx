// RegularOption.jsx
import { biddingSuits, biddingValues } from "./imageConstants.jsx";

const RegularOption = ({ selectedSuit, setSelectedSuit, selectedValue, setSelectedValue, selectedType, setSelectedType }) => {
  return (
    <div className="regular-option">
      <label>
        <input
          type="radio"
          name="type-choice"
          value="regular"
          checked={selectedType === "regular"}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bid-button-radio"
        />
        <p>regular</p>
      </label>

      <div className="regular-suboptions">
        <div className="bid-buttons-section">
          {biddingValues.map((value, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="value-choice"
                value={value.name}
                checked={selectedValue === value.name}
                onChange={(e) => {
                  setSelectedType("regular");
                  setSelectedValue(e.target.value);
                }}
                className="bid-button-radio"
              />
              <img
                className="bid-suit-image"
                src={value.image}
                alt={value.name}
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
                onChange={(e) => {
                  setSelectedType("regular");
                  setSelectedSuit(e.target.value);
                }}
                className="bid-button-radio"
              />
              <img
                className="bid-suit-image"
                src={suit.image}
                alt={suit.name}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegularOption;