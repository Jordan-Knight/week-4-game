var clan = {

	rza : {
		hp : 100,
		ap : 5,
		cap : 10,
	},

	gza : {
		hp : 120,
		ap : 6,
		cap : 15,
	},

	gfk : {
		hp : 140,
		ap : 7,
		cap : 20,
	},

	meth : {
		hp : 160,
		ap : 8,
		cap : 25,
	},
}
var playerChosen = false;
var player = ;
var enemy = ;


$(document).ready(function(){

	$("#rza").on("click", function(){
		playerChosen = true;
		player = clan.rza;
	})

}); 