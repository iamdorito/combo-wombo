import React, { useState } from "react";
import Combination from "./IndividualCombo";


const ComboList = ({
    combos,
    setCurrentCombo
    }) => {
    

    const renderComboList = combos.map((combination) => {
        return (
            <Combination 
                key={combination.id} 
                combination={combination} 
                setCurrentCombo={setCurrentCombo} 
                />
            );
        });
    
    return (
        <div className="combo-list">
            <h2 class="my-4 md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center">Combinations</h2>
            <tbody className="combo-list-table">
                <tr>
                    <th>
                        <h4 className="ui center aligned header"></h4>
                    </th>
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
                        <h4 className="ui center aligned header"></h4>
                    </th>
                </tr>
                <tr className="basic-combination">
                    <td></td>
                    <td>example combo</td>
                    <td>left</td>
                    <td>jab</td>
                    <td>left</td>
                    <td>jab</td>
                    <td>back</td>
                    <td>cross</td>
                    <td></td>
                </tr>
                {renderComboList}
                </tbody>
            </div>
        );
    }

export default ComboList;