import React, { useState } from "react";
import SelectedCombo from "./SelectedCombo.js";
import MyCombos from "./MyCombos.js";
import bagShib from './img/boxShib/1-2-combo.gif';
import Search from './Search';
import ComboList from "./ComboList.js";


function CombosPage({ 
    combos, 
    currentCombo,
    setCurrentCombo
    }) {

    const [ searchFilter, setSearchFilter ] = useState('');


    const handleSearch = (e) => {
        setSearchFilter(e.target.value.toLowerCase());
        console.log(searchFilter);
    }

    const searchResults = combos.filter((combo) => {
        return combo.name.toLowerCase().includes(searchFilter);
        });

  return (
    <div className="combo-page">
        {currentCombo ? (
            <SelectedCombo
                combos={combos} 
                currentCombo={currentCombo}
                setCurrentCombo={setCurrentCombo}
            />
            ):(
            <div>
                <h3 class="my-4 md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center">Choose a combo below</h3>
                    <p class="leading-normal text-base md:text-2xl mb-8 text-center font-bold md:text-center">Click the NAME of a combo to view!</p>
                <img class="w-3px mx-auto mx-0 slide-in-bottom" src={bagShib}/>
            </div>
            )}
        <Search
            searchFilter={handleSearch}
            />
        <ComboList
            combos={searchResults} 
            currentCombo={currentCombo}
            setCurrentCombo={setCurrentCombo}
            />
    </div>
  );
}

export default CombosPage;