import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage.js"
import ComboDisplay from "./ComboDisplay.js";
import ComboList from "./ComboList.js"
import AddComboForm from "./AddComboForm.js"

function MainPage() {
  const [ combos, setCombos ] = useState([]);
  const combosURL = "http://localhost:3000/combos";

  useEffect(() => {
    fetch(combosURL)
    .then(r => r.json())
    .then(combos => setCombos(combos))
  },[])

  console.log(combos)
  // function to add new combo through form
  const onAddCombo = (newCombo) => {
    setCombos((combos) => [...combos, newCombo])
  }

  return (
    <div className="MainPage">
      <body>
        
        <LandingPage />
        {/* <Combination /> */}
        <ComboDisplay combos={combos} />
        <ComboList combos={combos} />
        <AddComboForm onAddCombo={onAddCombo} />
      </body>
    </div>
  );
}

export default MainPage;