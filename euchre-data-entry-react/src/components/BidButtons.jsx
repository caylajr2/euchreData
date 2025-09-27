// // import { useState } from "react";
// // import {biddingSuits, biddingValues} from './imageConstants.jsx'
// // import '../styles/bidButtonStyle.css'

// // const BidButtons = ({ addBid }) => {
// //     const [selectedType, setSelectedType] = useState("")
// //     const [selectedSuit, setSelectedSuit] = useState("");
// //     const [selectedValue, setSelectedValue] = useState("");

// //     const handleSubmitBid = (e) => {
// //         e.preventDefault();
// //         if (selectedSuit === "" || selectedValue === "") {
// //             alert("Must select suit and value");
// //         } else {
// //             addBid(selectedType, selectedSuit, selectedValue );
// //             setSelectedSuit("");
// //             setSelectedValue("");
// //             setSelectedType("")
// //         }
// //     }

// //     return (
// //         <form onSubmit={handleSubmitBid}>
// //             <label>
// //                 <input
// //                     type="radio"
// //                     name="pass-choice"
// //                     value={'pass'}
// //                     checked={selectedType === 'pass'}
// //                     onChange={(e) => { console.log(e.target.value); setSelectedType(e.target.value) }}
// //                     className="bid-button-radio" />
// //                 <p>pass</p>
// //             </label>
// //             <label>
// //                 <input
// //                     type="radio"
// //                     name="shoot-choice"
// //                     value={'shoot'}
// //                     checked={selectedType === 'shoot'}
// //                     onChange={(e) => setSelectedType(e.target.value)}
// //                     className="bid-button-radio" />
// //                 <p>shoot</p>
// //             </label>
// //             <label>
// //                 <input
// //                     type="radio"
// //                     name="pshoot-choice"
// //                     value={'pshoot'}
// //                     checked={selectedType === 'pshoot'}
// //                     onChange={(e) => setSelectedType(e.target.value)}
// //                     className="bid-button-radio" />
// //                 <p>partner shoot</p>
// //             </label>
// //             <div className="bid-buttons-section">
// //                 {biddingValues.map((value, idx) => (
// //                 <label key={idx}>
// //                     <input
// //                         type="radio"
// //                         name="value-choice"
// //                         value={value.name}
// //                         checked={selectedValue === value.name}
// //                         onChange={(e) => setSelectedValue(e.target.value)}
// //                         className="bid-button-radio"
// //                     />
// //                     <img
// //                         className= "bid-suit-image"
// //                         src={value.image}
// //                         alt={`${value.name}`}
// //                     />
// //                 </label>
// //                 ))}
// //             </div>
// //             <div className="bid-buttons-section">
// //                 {biddingSuits.map((suit, idx) => (
// //                     <label className="bid-button-label" key={idx}>
// //                         <input
// //                             type="radio"
// //                             name="suit-choice"
// //                             value={suit.name}
// //                             checked={selectedSuit === suit.name}
// //                             onChange={(e) => setSelectedSuit(e.target.value)}
// //                             className="bid-button-radio"
// //                         />
// //                         <img
// //                             className= "bid-suit-image"
// //                             src={suit.image}
// //                             alt={`${suit.name}`}
// //                         />
// //                 </label>
// //                 ))}
// //             </div>

// //             <button type="submit">Add Bid</button>
// //         </form>
// //     );

// // }

// // export default BidButtons
// import { useState } from "react";
// import { biddingSuits, biddingValues } from "./imageConstants.jsx";
// import "../styles/bidButtonStyle.css";

// const BidButtons = ({ addBid }) => {
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedSuit, setSelectedSuit] = useState("");
//   const [selectedValue, setSelectedValue] = useState("");

//   const handleSubmitBid = (e) => {
//     e.preventDefault();

//     if (
//       selectedType === "regular" &&
//       (selectedSuit === "" || selectedValue === "")
//     ) {
//       alert("Must select suit and value for a regular bid");
//       return;
//     }

//     addBid(selectedType, selectedSuit, selectedValue);
//     setSelectedSuit("");
//     setSelectedValue("");
//     setSelectedType("");
//   };

//   return (
//     <form onSubmit={handleSubmitBid}>
//       {/* Pass */}
//       <label>
//         <input
//           type="radio"
//           name="type-choice"
//           value="pass"
//           checked={selectedType === "pass"}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="bid-button-radio"
//         />
//         <p>pass</p>
//       </label>

//       {/* Regular with sub-options */}
//       <div className="regular-option">
//         <label>
//           <input
//             type="radio"
//             name="type-choice"
//             value="regular"
//             checked={selectedType === "regular"}
//             onChange={(e) => setSelectedType(e.target.value)}
//             className="bid-button-radio"
//           />
//         </label>

//         {/* Sub-options directly under regular */}
//         <div className="regular-suboptions">
//           <div className="bid-buttons-section">
//             {biddingValues.map((value, idx) => (
//               <label key={idx}>
//                 <input
//                   type="radio"
//                   name="value-choice"
//                   value={value.name}
//                   checked={selectedValue === value.name}
//                   onChange={(e) => {
//                     setSelectedType("regular"); // force "regular"
//                     setSelectedValue(e.target.value);
//                   }}
//                   className="bid-button-radio"
//                 />
//                 <img
//                   className="bid-suit-image"
//                   src={value.image}
//                   alt={`${value.name}`}
//                 />
//               </label>
//             ))}
//           </div>

//           <div className="bid-buttons-section">
//             {biddingSuits.map((suit, idx) => (
//               <label className="bid-button-label" key={idx}>
//                 <input
//                   type="radio"
//                   name="suit-choice"
//                   value={suit.name}
//                   checked={selectedSuit === suit.name}
//                   onChange={(e) => {
//                     setSelectedType("regular"); // force "regular"
//                     setSelectedSuit(e.target.value);
//                   }}
//                   className="bid-button-radio"
//                 />
//                 <img
//                   className="bid-suit-image"
//                   src={suit.image}
//                   alt={`${suit.name}`}
//                 />
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Partner Shoot */}
//       <label>
//         <input
//           type="radio"
//           name="type-choice"
//           value="pshoot"
//           checked={selectedType === "pshoot"}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="bid-button-radio"
//         />
//         <p>partner shoot</p>
//       </label>

//       {/* Shoot */}
//       <label>
//         <input
//           type="radio"
//           name="type-choice"
//           value="shoot"
//           checked={selectedType === "shoot"}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="bid-button-radio"
//         />
//         <p>shoot</p>
//       </label>

//       <button type="submit">Add Bid</button>
//     </form>
//   );
// };

// export default BidButtons;


import { useState } from "react";
import BidOption from "./BidOption";
import RegularOption from "./RegularOption";
import "../styles/bidButtonStyle.css";

const BidButtons = ({ addBid }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSuit, setSelectedSuit] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmitBid = (e) => {
    e.preventDefault();

    if (
      selectedType === "regular" &&
      (selectedSuit === "" || selectedValue === "")
    ) {
      alert("Must select suit and value for a regular bid");
      return;
    }

    addBid(selectedType, selectedSuit, selectedValue);

    // Reset after submit
    setSelectedSuit("");
    setSelectedValue("");
    setSelectedType("");
  };

  return (
    <form onSubmit={handleSubmitBid}>
      <BidOption
        value="pass"
        label="pass"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <RegularOption
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedSuit={selectedSuit}
        setSelectedSuit={setSelectedSuit}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />

      <BidOption
        value="pshoot"
        label="partner shoot"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <BidOption
        value="shoot"
        label="shoot"
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <button type="submit">Add Bid</button>
    </form>
  );
};

export default BidButtons;
