var wall = false;
var complete = false;
var begin;
var finish;
var bound;
var state;
var game;

window.onload = function(){

	begin = document.getElementById("start");
	finish = document.getElementById("end");
	bound = document.querySelectorAll(".boundary");
	state = document.getElementById("status");
	game = document.getElementById("maze");
	begin.addEventListener("click", restart);
	finish.addEventListener("mouseover", alerts)

	for(var x = 0; x < bound.length; x++){
		bound.item(x).addEventListener("mouseover", touchbound);
		bound.item(x).addEventListener("mouseover", alerts);
	}
}

//when mouse touches any boundary it turns red
var touchbound = function(){

		wall = true;
		for(var x = 0; x < bound.length; x++)
		{		
			bound.item(x).setAttribute("class", "boundary youlose");
		}	
	}

var alerts = function(){

	if(wall === true)
	{
		state.innerHTML  = "You Lose..... Click S to restart";
	}else{
		complete = true;
		state.innerHTML = "You Win";	
	}
}

var restart = function(){
	wall = false;
	complete = false;
	for(var x = 0; x < bound.length; x++){
		bound.item(x).setAttribute("class", "boundary");
	}	
}

  
	 

