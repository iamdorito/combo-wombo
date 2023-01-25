import React from "react";

function ComboDisplay({ combos }) {
  return (
    <div className="combo-display">

        <h2>combo</h2>
        
        <div className='combo-display-container'>

          <div className='child' id='one'>
            1
            <td>leftStep</td>
            <td>jab</td>
          </div>

          <div className='child' id='two'>
            2            
            < td>leftStep</td>
            <td>jab</td>
          </div>

          <div className='child' id='three'>
            3
            <td>backStep</td>
            <td>cross</td>
          </div>

        </div>
    </div>
  );
}

export default ComboDisplay;