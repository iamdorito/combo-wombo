import React from "react";

function SelectedCombo({ 
  currentCombo,
  })  {

    // fetch("http://localhost:3000/combos")
    // .then(r => r.json())
    // .then(combos => setCombos(combos))
    
  return (
    <div className="selected-combo">

        <h2 class="my-4 text-3xl md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center">Combo Name: {currentCombo.name}</h2>
        
        <div className='selected-combo-container'>

          <div className='child' id='one'>
            <p className="selected-child-header">1</p>
            <p>{currentCombo.transition1}</p>
            <p>{currentCombo.strike1}</p>
          </div>

          <div className='child' id='two'>
            <p className="selected-child-header">2</p>           
            <p>{currentCombo.transition2}</p>
            <p>{currentCombo.strike2}</p>
          </div>

          <div className='child' id='three'>
            <p className="selected-child-header">3</p>
            <p>{currentCombo.transition3}</p>
            <p>{currentCombo.strike3}</p>
          </div>

        </div>
    </div>
  );
}

export default SelectedCombo;