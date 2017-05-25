// Create Characters as objects

var anakin = {
	hero: "anakin",
	health: 200,
	
	charSelect: false,

	// attack:  
	attack: function() {
          
          var strength = Math.floor(Math.random() * 50) +1;
          console.log("Your attack was: " + strength)
          
        },

    counter: function() {
          
          var defend = Math.floor(Math.random() * 35) +1;
          console.log("Your counter was: " + defend)
        },
}



var obi = {
	hero: "obi",
	health: 250,
	
	charSelect: false,

	attack: function() {
          
          var strength = Math.floor(Math.random() * 40) +1;
          console.log("Your attack was: " + strength)
          
        },

    counter: function() {
          
          var defend = Math.floor(Math.random() * 50) +1;
          console.log("Your counter was: " + defend)
        },
	
}

var general = {
	hero: "general",
	health: 300,

	charSelect: false,

	attack: function() {
          
          var strength = Math.floor(Math.random() * 60) +1;
          console.log("Your attack was: " + strength)
          
        },
	
	counter: function() {
          
          var defend = Math.floor(Math.random() * 25) +1;
          console.log("Your counter was: " + defend)
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
	this.charSelect = true;
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
	this.charSelect = true;
	$("#healtho").text("health: " + health);
	$("#anakin").clone().appendTo(".defenders");
	$("#general").clone().appendTo(".defenders");
}
)
;

$("#general").on("click", function () {
	var health = 300;
	$("#general").clone().appendTo(".selected");
	this.charSelect = true;
	$("#healthg").text("health: " + health);
	$("#obi").clone().appendTo(".defenders");
	$("#anakin").clone().appendTo(".defenders");
}
)
;

// Create Attack Function

$(".attack").on("click", function () {
	var attacker = $(".selected");
	var attack = Math.floor(Math.random() * 50) +1;
	var counter = Math.floor(Math.random() * 35) +1;
	console.log("Attack ", attack);
	console.log("Counter ", counter);
		if (($(".selected").attr("0")) === true, this.health > 0) {
			var newHealth = this.health - counter;
			$(".selected").html(newHealth);
			console.log(newHealth);

		}

} )