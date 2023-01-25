import React, { useState } from "react";
import Combination from "./Combination";


function ComboList({ combos }) {
    const renderComboList = combos.map((combination) => {
        return (
            <Combination key={combination.id} combination={combination} />
        )
    })

  return (
    <div className="combo-List">

        <h2>combinations</h2>

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
            <tr className="combination">
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
  );
}

export default ComboList;