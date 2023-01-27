// transition > strike > transition > strike > transition > strikeimport React from "react";
import React, { useState } from "react";

function Combination({ 
  combination,
  setCurrentCombo  
  }) {
    // create deconstructed object
    const { name, transition1, strike1, transition2, strike2, transition3, strike3 } = combination;

    const [ favToggle, setFavToggle ] = useState(false);
     
    const handleFavToggle = () => {
      setFavToggle(favToggle => !favToggle);
      }
    
    // function to delete combo
    const handleDelete = () => {
      fetch(`http://localhost:3000/combos/${combination.id}`, { 
          method: 'DELETE'
        })
        .then(() => console.log('deleted successfully'));
        }

    return (
      <tr className="individual-combination">
        <td    
          className="fav-button"   
          onClick={handleFavToggle}>{favToggle ? (
            <button className="emoji-button favorite active">★</button>
           ) : (
          <button className="emoji-button favorite">☆</button>
          )}</td>
        {/* add click to each combo to generate combo display */}
        <td    
          className="combo-display-button" 
          onClick={(e) => {
          setCurrentCombo(combination);
          }}>{name}</td>
        <td>{transition1}</td>
        <td>{strike1}</td>
        <td>{transition2}</td>
        <td>{strike2}</td>
        <td>{transition3}</td>
        <td>{strike3}</td>
        <td 
          className="delete-button" 
          onClick={handleDelete}>
            delete</td>
        </tr>
    );
  }
  
  export default Combination;