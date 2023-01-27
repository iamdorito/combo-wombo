import React from "react";
import ropeShib from './img/warmup/rope.gif';
import {Link} from "react-router-dom";


function LandingPage() {
  return (
    <div class="h-screen pb-14 bg-right bg-cover" >
      
      <div class="container pt-24 md:pt-5 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
		
		{/* <!--Left Col--> */}
		<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
			<h1 class="my-4 text-3xl md:text-8xl text-red-500 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Combo Wombo Generator</h1>
			<p class="leading-normal text-base md:text-2xl mb-8 text-center font-bold md:text-left slide-in-bottom-subtitle">Create your own combos to make the most of your drills!</p>
		
			<p class="text-red-400 text-2xl font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Get started!</p>
			<div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">

				<Link class="hover:text-red-500 text-center h-12 pr-4 bounce-top-icons" to="/combos">Combos</Link>
            	<Link class="hover:text-red-500 text-center h-12 pr-4 bounce-top-icons" to="/createCombos">Create Combo</Link>

			</div>

		</div>
		
		{/* <!--Right Col--> */}
		<div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
			<img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={ropeShib}/>
		</div>
		
		{/* <!--Footer--> */}
		<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
			<a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; Dorothy C</a>
		</div>
		
	</div>
	

    </div>
    
  );
}

export default LandingPage;