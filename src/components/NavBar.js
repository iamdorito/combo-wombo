import React, { useState } from 'react';
import baseShib from './img/basic-stance.gif';
import {Link} from "react-router-dom";

function NavBar() {
  
  return (
    <div class="w-full container ">	
		<div class="w-full flex items-center">
			<img src={baseShib} alt="logo" className='App-logo' />

		<nav>
            <Link class="text-3xl	text-red-300 hover:text-red-500 text-center h-10 p-2 md:h-auto md:p-4" to="/">Home</Link>
            <Link class="text-3xl	text-red-300 hover:text-red-500 text-center h-10 p-2 md:h-auto md:p-4" to="/combos">Combos</Link>
            <Link class="text-3xl	text-red-300 hover:text-red-500 text-center h-10 p-2 md:h-auto md:p-4" to="/createCombos">Create Combo</Link>
        </nav>
		</div>
	</div>
  );
}

export default NavBar;