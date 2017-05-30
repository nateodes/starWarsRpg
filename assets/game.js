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

		var strength = Math.floor(Math.random() * 60) +1;
		console.log("Your attack was: " + strength);
		return strength;


	},
	
	counter: function() {

		var defend = Math.floor(Math.random() * 25) +1;
		console.log("Your counter was: " + defend)
		return defend; 
	},
}

//Sound effects

// var audioOpen = new Audio(src= "assets/images/song.mp3")
var audioOpen = new Audio(src= "https://raw.githubusercontent.com/nateodes/starWarsRpg/master/assets/images/song.mp3")
// General Wins aka Vader music
var audio = new Audio(src= "assets/images/music.mp3") 

 //Attack sound
 var audioSaber = new Audio(src= "assets/images/saber.mp3")
 var audioBlasters = new Audio(src= "assets/images/blasters.mp3")

 $("#healtho").text("health: " + obi.health);
 $("#healthg").text("health: " + general.health);
 $("#healtha").text("health: " + anakin.health);
 audioOpen.play();


//Create function to select character

if (general.charSelect === false && obi.charSelect === false && anakin.charSelect === false) {
	$("#anakin").on("click", function () {
		audioBlasters.play();
	audioOpen.pause();
	// $("#anakin").clone().appendTo(".selected");
	$(".image1").animate({top: '+=250px'}, 2000);
	$(".image1").animate({left: '+=250px'}, 4000);
	anakin.charSelect = true;
	$("#anakin").addClass("chosen");
	
	$(".image2").animate({top: '+=500px'}, 2000);
	// $("#obi").clone().appendTo(".defenders");
	$("#obi").addClass("defender");
	obi.defender = true;

	// $("#general").clone().appendTo(".defenders");
	$(".image3").animate({top: '+=500px'}, 2000);
	

}
)
};


if (anakin.charSelect === false && general.charSelect === false && obi.charSelect === false) {
	$("#obi").on("click", function () {
		audioBlasters.play();
		$(".image2").animate({top: '+=250px'}, 2000);
		audioOpen.pause();

	// $("#obi").clone().appendTo(".selected");
	obi.charSelect = true;
	$("#obi").addClass("chosen");
	
	$(".image1").animate({top: '+=500px'}, 2000);
	// $("#anakin").clone().appendTo(".defenders");
	anakin.defender = true; 
	$("#anakin").addClass("defender");

	$(".image3").animate({top: '+=500px'}, 2000);
	$(".image3").animate({right: '+=100px'}, 4000);
	// $("#general").clone().appendTo(".defenders");
	
}
)
};

if (anakin.charSelect === false && obi.charSelect === false && general.charSelect === false) {
	$("#general").on("click", function () {
		audioBlasters.play();
		$(".image3").animate({top: '+=250px'}, 2000);
		$(".image3").animate({right: '+=100px'}, 4000);
		audioOpen.pause();
	// $("#general").clone().appendTo(".selected");
	general.charSelect = true;
	$("#general").addClass("chosen");

	$(".image2").animate({top: '+=500px'}, 2000);
	// $("#obi").clone().appendTo(".defenders");
	obi.defender = true;
	$("#obi").addClass("defender");
	
	$(".image1").animate({top: '+=500px'}, 2000);
	// $("#anakin").clone().appendTo(".defenders");
	
}
)
};






// Create Attack Function

$(".attack").on("click", function () {

$(".alert .alert-success .alert-danger .alert-warning").hide();
// Run through game as Anankin 	
audioSaber.play();
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
			
			$("#health1").animate({value: newHealth}, "very slow");
			$("#health3").animate({value: defenderHealth}, "very slow");
			
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

		$("#health1").animate({value: damagedHealth}, "very slow");
		$("#health3").animate({value: damagedDefender}, "very slow");
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

		$("#health1").animate({value: damagedHealth}, "very slow");
		$("#health2").animate({value: damagedDefender}, "very slow");
	}
	//Anakin as attacker and Obi as first defender
	if (anakin.charSelect === true && obi.defender === true && anakin.damaged === false && obi.damaged === false) {


		var x = anakin.attack();
		var y = obi.counter();
		var z = anakin.health;
		var a = obi.health;
		
		var newHealth = z - y; 
		var defenderHealth = a - x;

		
		anakin.damaged = true;
		obi.damaged = true;
		$("#healtha").html(newHealth);
		console.log(newHealth);
		anakin.health = newHealth;

		$("#healtho").html(defenderHealth);
		obi.health = defenderHealth;
		console.log("defenders health is " + defenderHealth);

		$("#health1").animate({value: newHealth}, "very slow");
		$("#health2").animate({value: defenderHealth}, "very slow");
	}

	

	// When Anakin dies
	if (anakin.charSelect === true && anakin.health < 0) {
		alert("Anakin has been slain, try again!");
		console.log("anakin lost");

		anakin.charSelect = false;
		obi.defender = false;
		
		$(".attack").animate({ opacity: "0.05" });
		$(".image1").animate({top: '-=250px'}, 2000);
		$(".image3").animate({right: '+=100px'}, 2000);
		
		$("#health1").animate({value: anakin.health}, "very slow");

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
			$(".image2").animate({top: '-=500px'}, 2000);

			$("#health1").animate({value: anakin.health}, "very slow");
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
			$(".image1").animate({top: '-=250px'}, 2000);
			$(".image1").animate({right: '+=200px'}, 2000);
			$(".image3").animate({top: '-=500px'}, 2000);
			audio.play();
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

	$("#health2").animate({value: newHealth}, "very slow");
	$("#health3").animate({value: defenderHealth}, "very slow");
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

		$("#health2").animate({value: damagedHealth}, "very slow");
		$("#health3").animate({value: damagedDefender}, "very slow");
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

			$("#health2").animate({value: damagedHealth}, "very slow");
			$("#health1").animate({value: damagedDefender}, "very slow");
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

		$("#health2").animate({value: newHealth}, "very slow");
		$("#health1").animate({value: defenderHealth}, "very slow");
	}

	

	// If Obi dies
	if (obi.charSelect === true && obi.health < 0) {
		alert("Obi Wan has been slain, don't let the Jedi down!");
		console.log("Obi lost");
		obi.charSelect = false;
		anakin.defender = false;
		$(".attack").animate({ opacity: "0.05" });
		$(".image2").animate({top: '-=250px'}, 2000);


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
			$(".image1").animate({top: '-=500px'}, 2000);
			$("#health1").animate({value: obi.health}, "very slow");	
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
			$(".image2").animate({top: '-=250px'}, 2000);
			$(".image3").animate({top: '-=500px'}, 2000);
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

	$("#health3").animate({value: newHealth}, "very slow");
	$("#health1").animate({value: defenderHealth}, "very slow");
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

		$("#health3").animate({value: damagedHealth}, "very slow");
		$("#health1").animate({value: damagedDefender}, "very slow");
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

			$("#health3").animate({value: damagedHealth}, "very slow");
			$("#health2").animate({value: damagedDefender}, "very slow");
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

		$("#health3").animate({value: newHealth}, "very slow");
		$("#health2").animate({value: defenderHealth}, "very slow");
	}

	

	// If General dies
	if (general.charSelect === true && general.health < 0) {
		alert("The General has been lost, it's ok he's just a droid");
		console.log("General lost");
		general.charSelect = false;
		obi.defender = false;
		$(".attack").animate({ opacity: "0.05" });
		$(".image3").animate({top: '-=250px'}, 2000);
		$(".image3").animate({left: '+=100px'}, 2000);


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
			$(".image2").animate({top: '-=500px'}, 2000);

			$("#health1").animate({value: general.health}, "very slow");
		}

		
		// If General beats Anakin
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
			// playAudio()
			console.log("play music");
			audio.play();
			$(".image3").animate({top: '-=250px'}, 1000);
			$(".image3").animate({left: '+=100px'}, 1000);
			$(".image1").animate({top: '-=500px'}, 2000); 
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

	audio.pause();

	$(".image1").animate({top: '20', left: '20'}, 2000);
	$(".image2").animate({top: '20', left: '90'}, 2000);
	$(".image3").animate({top: '20', left: '130'}, 2000);

	$("#health1").animate({value: anakin.health}, "very slow");
	$("#health2").animate({value: obi.health}, "very slow");
	$("#health3").animate({value: general.health}, "very slow");


})
