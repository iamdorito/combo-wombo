import React, { useState } from "react";
// import punchSound from './sounds/mixkit-cartoon-punch-2149.wav'


function AddComboForm({ 
  onAddCombo,
  transitions,
  punches
   }) {
  // create new object to add to combos array
  const newCombination = {
    name: "",
    transition1: "",
    strike1: "",    
    transition2: "",
    strike2: "",    
    transition3: "",
    strike3: ""
    }

  // set state for new obj created
  const [ formData, setFormData ] = useState(newCombination);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({...formData, [name]: value });
    }

  const handleSubmit = (e) => {
    e.preventDefault();

  // POST request
  const objPost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData)
      }

    fetch("http://localhost:3000/combos",objPost)
      .then(r => r.json())
      .then((newCombo) => onAddCombo(newCombo))
    }

  const transitionDropDown = transitions.map((transition) => {
    return (
        <option 
          key={transition.id} 
          value={transition.name}
          >
            {transition.name}
          </option>
        );
      });

  const punchDropDown = punches.map((punch) => {
    return (
      <option
        key={punch.id} 
        value={punch.name}
        >
          {punch.name}
        </option>
    )
  })

  return (
    <div className="form">
      <body>
    <div class="box-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3 class="my-4 text-3xl md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center" > create combo </h3>

      <h5>name your combo</h5>
      <input type="text" name="name" placeholder="Name your combo" required onChange={handleChange}/>

      <div id="move1" name="move1">
          <h5>1</h5>
            <label for="transition1" >transition</label>
            <select id="transition1" name="transition1" required onChange={handleChange} >
              <option value="">select direction</option>
              {transitionDropDown}
            </select>

            <br></br>
            <label for="strike1" >strike</label>
            <select id="strike1" name="strike1" required onChange={handleChange} >
              <option value="">select punch</option>
              {punchDropDown}
            </select>

            <h3>2</h3>
            <label for="transition2" >transition</label>
            <select id="transition2" name="transition2" required onChange={handleChange} >
            <option value="">select direction</option>
              {transitionDropDown}
            </select>
            <br></br>
            <label for="strike2" >strike</label>
            <select id="strike2" name="strike2" required onChange={handleChange} >
            <option value="">select punch</option>
              {punchDropDown}
            </select>

            <h3>3</h3>
            <label for="transition3" >transition</label>
            <select id="transition3" name="transition3" required onChange={handleChange} >
            <option value="">select direction</option>
              {transitionDropDown}
            </select>
            <br></br>
            <label for="strike3" >strike</label>
            <select id="strike3" name="strike3" required onChange={handleChange} >
            <option value="">select punch</option>
              {punchDropDown}
            </select>
            <br></br>            
            <br></br>
            <button 
              className="ui-button" 
              class="my-4 text-3xl font-bold leading-tight text-center md:text-center" 
              type="submit" 
              >
              Save Combo
            </button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddComboForm;