var wall = false;

window.onload = function(){

	var begin = document.getElementById("start");
	var finish = document.getElementById("end");
	var bound = document.querySelectorAll(".boundary");
	var state = document.getElementById("status");
	var game = document.getElementById("maze");
	

	for(var x = 0; x < bound.length; x++){
		bound.item(x).addEventListener("mouseover", touchbound);
		bound.item(x).addEventListener("mouseover", alerts);
	}
}

//when mouse touches any boundary it turns red
var touchbound = function(){

		wall = true;
		var bound = document.querySelectorAll(".boundary");
		for(var x = 0; x < bound.length; x++)
		{		
			bound.item(x).setAttribute("class", "boundary youlose");
		}	
	}

var alerts = function(){
	var state = document.getElementById("status");
	if(wall === true)
	{			 
		state.innerHTML  = "You Lose";
	}else{
		state.innerHTML = "You Win......";
	}
}

  
	 

