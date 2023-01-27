import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import ComboList from './components/ComboList';
import AddComboForm from './components/AddComboForm';
import LandingPage from './components/LandingPage';


function App() {
  const [ combos, setCombos ] = useState([]);
  const [ currentCombo, setCurrentCombo ] = useState('');
  const combosURL = "http://localhost:3000/combos";

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(combosURL);
      let comboData = await res.json();
      setCombos(comboData);
    };
    fetchData();
  },[])

  console.log(combos)
  // function to add new combo through form
  const onAddCombo = (newCombo) => {
    setCombos((combos) => [...combos, newCombo])
  }

  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route path="/combos">
          <ComboList 
          combos={combos} 
          currentCombo={currentCombo}
          setCurrentCombo={setCurrentCombo}
          />
        </Route>
        <Route path="/createCombos">
          <AddComboForm onAddCombo={onAddCombo} />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>

{/* 
      <MainPage /> */}
    </div>
  );
}

export default App;