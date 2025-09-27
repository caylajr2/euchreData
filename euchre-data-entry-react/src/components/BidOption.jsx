const BidOption = ({ value, label, selectedType, setSelectedType }) => {
  return (
    <label>
      <input
        type="radio"
        name="type-choice"
        value={value}
        checked={selectedType === value}
        onChange={(e) => setSelectedType(e.target.value)}
        className="bid-button-radio"
      />
      <p>{label}</p>
    </label>
  );
};

export default BidOption;