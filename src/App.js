import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CombosPage from './components/CombosPage';
import AddComboForm from './components/AddComboForm';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [ combos, setCombos ] = useState([]);
  const [ currentCombo, setCurrentCombo ] = useState('');
  const [ transitions, setTransitions ] = useState('');
  const [ punches, setPunches ] = useState('');
  const combosURL = "http://localhost:3000/combos";

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(combosURL);
      let comboData = await res.json();
      setCombos(comboData);
    };
    fetchData();
    },[])

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/transitionSteps");
      let transitionData = await res.json();
      setTransitions(transitionData);
    };
    fetchData();
    },[])

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/punches");
      let punchData = await res.json();
      setPunches(punchData);
    };
    fetchData();
    },[])

  // function to add new combo through form
  const onAddCombo = (newCombo) => {
    setCombos((combos) => [...combos, newCombo])
  }

  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route path="/combos">
          <CombosPage 
            combos={combos} 
            currentCombo={currentCombo}
            setCurrentCombo={setCurrentCombo}
            />
        </Route>
        <Route path="/createCombos">
          <AddComboForm 
            onAddCombo={onAddCombo}
            transitions={transitions}
            punches={punches}
            />
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