import React, { useState } from "react";
import SelectedCombo from "./SelectedCombo.js";
import Combination from "./IndividualCombo";
import bagShib from './img/boxShib/1-2-combo.gif';


function ComboList({ 
    combos, 
    currentCombo,
    setCurrentCombo
    }) {

    const renderComboList = combos.map((combination) => {
        return (
            <Combination 
                key={combination.id} 
                combination={combination} 
                setCurrentCombo={setCurrentCombo} 
                />
        )
    })

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
			<h3 class="my-4 text-3xl md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center">Choose a combo below</h3>
                <img class="w-3px mx-auto mx-0 slide-in-bottom" src={bagShib}/>
                </div>
        )}
 

        <div className="combo-list">


        <h2 class="my-4 text-3xl md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center">Combinations</h2>

        <tbody className="combo-list-table">
            <tr>
                <th>
                    <h4 className="ui center aligned header">name</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">transition 1</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">strike 1</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">transition 2</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">strike 2</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">transition 3</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">strike 3</h4>
                </th>
                <th>
                    <h4 className="ui center aligned header">delete</h4>
                </th>
            </tr>
            <tr className="basic-combination">
                <td>basic combo</td>
                <td>left</td>
                <td>jab</td>
                <td>left</td>
                <td>jab</td>
                <td>back</td>
                <td>cross</td>
            </tr>
            {renderComboList}
        </tbody>
        </div>
    </div>
  );
}

export default ComboList;