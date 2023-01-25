// transition > strike > transition > strike > transition > strikeimport React from "react";
import React, { useState } from "react";

function Combination({ combination }) {
    // create deconstructed object
    const { name, transition1, strike1, transition2, strike2, transition3, strike3 } = combination;

    // add click to each combo to generate combo display
    
    // function to delete combo

  const handleDelete = () => {
    fetch(`http://localhost:3000/combos/${combination.id}`, { 
        method: 'DELETE'
    })
        .then(() => console.log('deleted successfully'));
}

    return (
          <tr className="combination">
            <td>{name}</td>
            <td>{transition1}</td>
            <td>{strike1}</td>
            <td>{transition2}</td>
            <td>{strike2}</td>
            <td>{transition3}</td>
            <td>{strike3}</td>
            <button onClick={handleDelete}>delete</button>
        </tr>
    );
  }
  
  export default Combination;