// Create Characters as objects

var anakin = {
	hero: "anakin",
	health: 200,
	damaged: false,
	charSelect: false,

	  
	attack: function() {
          
          var strength = Math.floor(Math.random() * 50) +1;
          console.log("Your attack was: " + strength);
          return strength;
          
          
        },

    counter: function() {
          
          var defend = Math.floor(Math.random() * 35) +1;
          console.log("Your counter was: " + defend)
          return defend; 
        },
}



var obi = {
	hero: "obi",
	health: 250,
	damaged: false,
	charSelect: false,

	attack: function() {
          
          var strength = Math.floor(Math.random() * 40) +1;
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



$("#healtho").text("health: " + obi.health);
$("#healthg").text("health: " + general.health);
$("#healtha").text("health: " + anakin.health);

//Create function to select character


$("#anakin").on("click", function () {
	var health = 200;
	
	$("#anakin").clone().appendTo(".selected");
	$("#anakin").attr("0");
	anakin.charSelect = true;
	// $("#healtha").text("health: " + health);
	
	$("#obi").clone().appendTo(".defenders");
	$("#obi").attr("1");
	
	$("#general").clone().appendTo(".defenders");
	$("#general").attr("2");


}
)
;

$("#obi").on("click", function () {
	var health = 250;
	$("#obi").clone().appendTo(".selected");
	obi.charSelect = true;
	$("#healtho").text("health: " + health);
	$("#anakin").clone().appendTo(".defenders");
	$("#general").clone().appendTo(".defenders");
}
)
;

$("#general").on("click", function () {
	var health = 300;
	$("#general").clone().appendTo(".selected");
	general.charSelect = true;
	$("#healthg").text("health: " + health);
	$("#obi").clone().appendTo(".defenders");
	$("#anakin").clone().appendTo(".defenders");
}
)
;

// Create Attack Function

$(".attack").on("click", function () {
	var attacker = anakin.hero;
	var defender = obi.hero;
	var attackerHealth; 
	var defenderHealth;
	
		if (anakin.damaged == true || obi.damaged == true || general.damaged == true) {
			
			
			var x = anakin.attack();
			var y = obi.counter();
			var q = anakin.health;

			var damagedHealth = q - y;
			$("#healtha").html(damagedHealth);
			console.log(damagedHealth);
			anakin.health = damagedHealth;
		}

		if (attacker === "anakin" && defender === "obi" && anakin.damaged == false) {
			
			
			var x = anakin.attack();
			var y = obi.counter();
			var z = anakin.health;

			var newHealth = z - y; 
			// var health = $("#health");
			// 	health.value -= y;
			anakin.damaged = true;
			obi.damaged = true;
			$("#healtha").html(newHealth);
			console.log(newHealth);
			anakin.health = newHealth;
			
			
			}
		// if (attacker === "anakin" && defender === "obi" && anakin.health !== 200 || obi.health !== 250 || general.health !== 300) {

		// 	var x = anakin.attack();
		// 	var y = obi.counter();
		// 	// var healthLeft = $("#healtha");
		// 	var healthLeft = attackerHealth - y;
			
		// 	// newHealth = attackerHealth;
		// 	// var healthLeft = newHealth - y; 
		// 	$("#healtha").html(healthLeft);
		// 	console.log(healthLeft);
			

		// }

} )