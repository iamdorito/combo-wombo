import React from "react";
import ropeShib from './img/rope.gif';


function LandingPage() {
  return (
    <div class="h-screen pb-14 bg-right bg-cover" >
      
      <div class="container pt-24 md:pt-5 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
		
		{/* <!--Left Col--> */}
		<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
			<h1 class="my-4 text-3xl md:text-5xl text-blue-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Combo Generator</h1>
			<p class="leading-normal text-base md:text-2xl mb-8 text-center font-boldmd:text-left slide-in-bottom-subtitle">create combos for fun and/or drilling!</p>
		
			<p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">See what's happening!</p>
			<div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
				<img src=".img/App Store.svg" class="h-12 pr-4 bounce-top-icons"/>
				<img src="Play Store.svg" class="h-12 bounce-top-icons"/>
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