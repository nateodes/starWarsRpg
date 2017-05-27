// Create Characters as objects
var heroArray = [anakin, obi, general];
var attacker = [];
var defenders = [];
var wins = 0;



var anakin = {
	hero: "anakin",
	health: 200,
	damaged: false,
	charSelect: false,
	defender: false,
	  
	attack: function() {
          
          var strength = Math.floor(Math.random() * 50) +1;
          console.log("Your attack was: " + strength);
          return strength;
          
          
        },

    counter: function() {
          
          var defend = Math.floor(Math.random() * 65) +1;
          console.log("Your counter was: " + defend)
          return defend; 
        },
}



var obi = {
	hero: "obi",
	health: 250,
	damaged: false,
	charSelect: false,
	defender: false,

	attack: function() {
          
          var strength = Math.floor(Math.random() * 50) +1;
          console.log("Your attack was: " + strength)
          return strength; 
          
        },

    counter: function() {
          
          var defend = Math.floor(Math.random() * 50) +1;
          console.log("Your counter was: " + defend)
          return defend; 
          
        },
	
}

var general = {
	hero: "general",
	health: 300,
	damaged: false,
	charSelect: false,
	defender: false,

	attack: function() {
          
          var strength = Math.floor(Math.random() * 160) +1;
          console.log("Your attack was: " + strength);
          return strength;

          
        },
	
	counter: function() {
          
          var defend = Math.floor(Math.random() * 25) +1;
          console.log("Your counter was: " + defend)
          return defend; 
        },
}



$("#healtho").text("health: " + obi.health);
$("#healthg").text("health: " + general.health);
$("#healtha").text("health: " + anakin.health);

//Create function to select character


$("#anakin").on("click", function () {
	
	
	$("#anakin").clone().appendTo(".selected");
	
	anakin.charSelect = true;
	$("#anakin").addClass("chosen");
	
	$("#obi").clone().appendTo(".defenders");
	$("#obi").addClass("defender");
	obi.defender = true;

	$("#general").clone().appendTo(".defenders");
	
	// general.defender = true;

}
)
;

$("#obi").on("click", function () {
	
	$("#obi").clone().appendTo(".selected");
	obi.charSelect = true;
	$("#obi").addClass("chosen");
	$("#anakin").clone().appendTo(".defenders");
	anakin.defender = true; 
	$("#anakin").addClass("defender");
	$("#general").clone().appendTo(".defenders");
	// general.defender = false;
}
)
;

$("#general").on("click", function () {
	
	$("#general").clone().appendTo(".selected");
	general.charSelect = true;
	$("#general").addClass("chosen");
	$("#obi").clone().appendTo(".defenders");
	obi.defender = true;
	$("#obi").addClass("defender");
	$("#anakin").clone().appendTo(".defenders");
	// anakin.defender = true;
}
)
;






// Create Attack Function

$(".attack").on("click", function () {

// Run through game as Anankin 	
		
		//Anakin beat Obi, now General is defender
		if (anakin.charSelect === true && general.defender === true && anakin.damaged === false) {


			var x = anakin.attack();
			var y = general.counter();
			var z = anakin.health;
			var a = general.health;
		
			var newHealth = z - y; 
			var defenderHealth = a - x;

			var health = $("#health");
			health.value -= y;
			anakin.damaged = true;
			general.damaged = true;
			$("#healtha").html(newHealth);
			console.log(newHealth);
			anakin.health = newHealth;

			$("#healthg").html(defenderHealth);
			general.health = defenderHealth;
			console.log("defenders health is " + defenderHealth);
			
			
		}


	// After player has been damaged 
		if (anakin.damaged === true && general.damaged === true) {


			var x = anakin.attack();
			var y = general.counter();
			var q = anakin.health;
			var a = general.health;
			var damagedHealth = q - y;
			var damagedDefender = a - x;
			$("#healtha").html(damagedHealth);
			console.log(damagedHealth);
			anakin.health = damagedHealth;
			$("#healthg").html(damagedDefender);
			general.health = damagedDefender;
	}
		if (anakin.damaged == true && obi.damaged == true) {


		var x = anakin.attack();
		var y = obi.counter();
		var q = anakin.health;
		var a = obi.health;
		var damagedHealth = q - y;
		var damagedDefender = a - x;
		$("#healtha").html(damagedHealth);
		console.log(damagedHealth);
		anakin.health = damagedHealth;
		$("#healtho").html(damagedDefender);
		obi.health = damagedDefender;
	}
	//Anakin as attacker and Obi as first defender
	if (anakin.charSelect === true && obi.defender === true && anakin.damaged === false && obi.damaged === false) {


		var x = anakin.attack();
		var y = obi.counter();
		var z = anakin.health;
		var a = obi.health;
		
		var newHealth = z - y; 
		var defenderHealth = a - x;

			var health = $("#health");
			health.value -= y;
			anakin.damaged = true;
			obi.damaged = true;
			$("#healtha").html(newHealth);
			console.log(newHealth);
			anakin.health = newHealth;

			$("#healtho").html(defenderHealth);
			obi.health = defenderHealth;
			console.log("defenders health is " + defenderHealth);
			
			
		}
		
	

	// When Anakin dies
		if (anakin.charSelect === true && anakin.health < 0) {
			alert("Anakin has been slain, try again!");
			console.log("anakin lost");
			anakin.charSelect = false;
			obi.defender = false;
			$(".attack").animate({ opacity: "0.05" });


		}
		// If Anakin beats Obi
		if (anakin.charSelect === true && obi.health < 0 && obi.defender === true) {
			alert("You have slain your teacher, good work, your powers are growing!");
			//Change defenders
			obi.defender = false;
			obi.damaged = false;
			general.defender = true;
			anakin.damaged = false;
			$("#general").addClass("defender");
			$("#obi").animate({ opacity: "0.05" });
			//Reset health
			anakin.health = 260;
			$("#healtha").html(anakin.health);	
		}

		
		// If Anakin beats the General
		if (anakin.charSelect === true && general.health < 0) {
			alert("You have slain the evil General Grievous, you win!!");
			anakin.health = 200;
			$("#healtha").html(anakin.health);
			obi.defender = false;
			general.defender = false;
			anakin.damaged = false;
			anakin.charSelect = false;
			general.damaged = false;
			wins++;
			$("#general").animate({ opacity: "0.05" });	
			$(".wins").html("<h2> Wins: " + wins + "<h2>");
		}

// Run through game as Obi ------------------------------------------

//Obi beat Anakin, now General is defender
		if (obi.charSelect === true && general.defender === true && obi.damaged === false) {


			var x = obi.attack();
			var y = general.counter();
			
			var z = obi.health;
			var a = general.health;
		
			var newHealth = z - y; 
			var defenderHealth = a - x;

			var health = $("#health");
			health.value -= y;
			obi.damaged = true;
			general.damaged = true;
			$("#healtho").html(newHealth);
			console.log(newHealth);
			obi.health = newHealth;

			$("#healthg").html(defenderHealth);
			general.health = defenderHealth;
			console.log("defenders health is " + defenderHealth);
			
			
		}


	// After players has been damaged 
		if (obi.damaged === true && general.damaged === true && obi.charSelect === true) {


			var x = obi.attack();
			var y = general.counter();
			
			var q = obi.health;
			var a = general.health;
			
			var damagedHealth = q - y;
			var damagedDefender = a - x;
			
			$("#healtho").html(damagedHealth);
			console.log(damagedHealth);
			obi.health = damagedHealth;
			$("#healthg").html(damagedDefender);
			general.health = damagedDefender;
	}
		
		//Both characters damaged
		if (obi.damaged === true && anakin.damaged === true && obi.charSelect === true) {


		var x = obi.attack();
		var y = anakin.counter();
		
		var q = obi.health;
		var a = anakin.health;
		
		var damagedHealth = q - y;
		var damagedDefender = a - x;
		
		$("#healtho").html(damagedHealth);
		console.log(damagedHealth);
		obi.health = damagedHealth;
		$("#healtha").html(damagedDefender);
		anakin.health = damagedDefender;
	}
	

	//Obi as attacker and Anakin as first defender
	if (obi.charSelect === true && anakin.defender === true && anakin.damaged === false && obi.damaged === false) {


		var x = obi.attack();
		var y = anakin.counter();
		
		var z = obi.health;
		var a = anakin.health;
		
		var newHealth = z - y; 
		var defenderHealth = a - x;

			var health = $("#health");
			health.value -= y;
			anakin.damaged = true;
			obi.damaged = true;
			$("#healtho").html(newHealth);
			console.log(newHealth);
			obi.health = newHealth;

			$("#healtha").html(defenderHealth);
			anakin.health = defenderHealth;
			console.log("defenders health is " + defenderHealth);
			
			
		}
		
	

	// If Obi dies
		if (obi.charSelect === true && obi.health < 0) {
			alert("Obi Wan has been slain, don't let the Jedi down!");
			console.log("Obi lost");
			obi.charSelect = false;
			anakin.defender = false;
			$(".attack").animate({ opacity: "0.05" });


		}
		// If Obi beats Anakin
		if (obi.charSelect === true && anakin.health < 0 && anakin.defender === true) {
			alert("You have slain your student, aka Future Vader, good job!");
			//Change defenders
			anakin.defender = false;
			obi.damaged = false;
			general.defender = true;
			anakin.damaged = false;
			
			$("#general").addClass("defender");
			$("#obi").animate({ opacity: "0.05" });
			//Reset health
			obi.health = 250;
			$("#healtha").html(anakin.health);	
		}

		
		// If Obi beats the General
		if (obi.charSelect === true && general.health < 0) {
			alert("You have slain the evil General Grievous, you win!!");
			obi.health = 250;
			$("#healtha").html(anakin.health);
			anakin.defender = false;
			general.defender = false;
			obi.damaged = false;
			obi.charSelect = false;
			general.damaged = false;
			wins++;
			$("#general").animate({ opacity: "0.05" });	
			$(".wins").html("<h2> Wins: " + wins + "<h2>");
		}


// Play game as General --------------------------------------

//General beat Obi, now Anakin is defender
		if (general.charSelect === true && anakin.defender === true && general.damaged === false) {


			var x = general.attack();
			var y = anakin.counter();
			
			var z = general.health;
			var a = anakin.health;
		
			var newHealth = z - y; 
			var defenderHealth = a - x;

			var health = $("#health");
			health.value -= y;
			anakin.damaged = true;
			general.damaged = true;
			$("#healthg").html(newHealth);
			console.log(newHealth);
			general.health = newHealth;

			$("#healtha").html(defenderHealth);
			anakin.health = defenderHealth;
			console.log("defenders health is " + defenderHealth);
			
			
		}


	// After players has been damaged 
		if (general.damaged === true && anakin.damaged === true && general.charSelect === true) {


			var x = general.attack();
			var y = anakin.counter();
			
			var q = general.health;
			var a = anakin.health;
			
			var damagedHealth = q - y;
			var damagedDefender = a - x;
			
			$("#healthg").html(damagedHealth);
			console.log(damagedHealth);
			general.health = damagedHealth;
			$("#healtha").html(damagedDefender);
			anakin.health = damagedDefender;
	}
		
		//General against Obi Both characters damaged
		if (general.damaged === true && obi.damaged === true && general.charSelect === true) {


		var x = general.attack();
		var y = obi.counter();
		
		var q = general.health;
		var a = obi.health;
		
		var damagedHealth = q - y;
		var damagedDefender = a - x;
		
		$("#healthg").html(damagedHealth);
		console.log(damagedHealth);
		general.health = damagedHealth;
		$("#healtho").html(damagedDefender);
		obi.health = damagedDefender;
	}
	

	//General as attacker and Obi as first defender
	if (general.charSelect === true && obi.defender === true && general.damaged === false && obi.damaged === false) {


		var x = general.attack();
		var y = obi.counter();
		
		var z = general.health;
		var a = obi.health;
		
		var newHealth = z - y; 
		var defenderHealth = a - x;

			var health = $("#health");
			health.value -= y;
			general.damaged = true;
			obi.damaged = true;
			$("#healthg").html(newHealth);
			console.log(newHealth);
			general.health = newHealth;

			$("#healtho").html(defenderHealth);
			obi.health = defenderHealth;
			console.log("defenders health is " + defenderHealth);
			
			
		}
		
	

	// If General dies
		if (general.charSelect === true && general.health < 0) {
			alert("The General has been lost, it's ok he's just a droid");
			console.log("General lost");
			general.charSelect = false;
			obi.defender = false;
			$(".attack").animate({ opacity: "0.05" });


		}
		// If General beats Obi
		if (general.charSelect === true && obi.health < 0 && obi.defender === true) {
			alert("You have defeated a great Jedi Master, but he cut off one of your crazy arms!");
			//Change defenders
			obi.defender = false;
			general.damaged = false;
			anakin.defender = true;
			obi.damaged = false;
			$("#anakin").addClass("defender");
			$("#anakin").addClass("defender");
			$("#obi").animate({ opacity: "0.05" });
			//Reset health
			general.health = 250;
			$("#healthg").html(anakin.health);	
		}

		
		// If General beats the Anakin
		if (general.charSelect === true && anakin.health < 0) {
			alert("You have slain the Jedi, now you do whatever droids with light sabers do");
			general.health = 300;
			$("#healthg").html(general.health);
			anakin.defender = false;
			obi.defender = false;
			general.damaged = false;
			general.charSelect = false;
			anakin.damaged = false;
			wins++;
			$("#anakin").animate({ opacity: "0.05" });	
			$(".wins").html("<h2> Wins: " + wins + "<h2>");
			var t = $("#myAudio"); 

				function playAudio() { 
   				 t.play(); 
				} 
		}



	} )


/// Create Reset Button -------------------------------------
// Reset all character classes and stats
$(".reset").on("click", function () {

	anakin.health = 200;
	anakin.damaged = false;
	anakin.charSelect = false;
	anakin.defender = false;

	obi.health = 250;
	obi.damaged = false;
	obi.charSelect = false;
	obi.defender = false;

	general.health = 300;
	general.damaged = false;
	general.charSelect = false;
	general.defender = false;

	$("#healtha").html(anakin.health);
	$("#healtho").html(obi.health);
	$("#healthg").html(general.health);

	$(".defenders").remove();
	
	$("#anakin").removeClass("chosen");
	$("#anakin").removeClass("defender");

	$("#obi").removeClass("chosen");
	$("#obi").removeClass("defender");

	$("#general").removeClass("chosen");
	$("#general").removeClass("defender");

	$("#anakin").animate({ opacity: "1" });
	$("#obi").animate({ opacity: "1" });
	$("#general").animate({ opacity: "1" });
})
