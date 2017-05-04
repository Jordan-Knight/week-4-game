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
var enemyChosen = false;
var player = "";
var enemy = "";
var id = "";


$(document).ready(function(){

	$.each(clan, function(key){
		$("#" + key + "-hp").text(this.hp);
	});
	$(document).on("click", function(){
	
		if (playerChosen === false){
			$("#rza").on("click", function(){
				playerChosen = true;
				player = clan.rza;
				id = "rza";
				$("#" + id).appendTo("#player");
			});
			$("#gza").on("click", function(){
				playerChosen = true;
				player = clan.gza;
				id = "gza";
				$("#" + id).appendTo("#player");
			});
			$("#gfk").on("click", function(){
				playerChosen = true;
				player = clan.gfk;
				id = "gfk";
				$("#" + id).appendTo("#player");
			});
			$("#meth").on("click", function(){
				playerChosen = true;
				player = clan.meth;
				id = "meth";
				$("#" + id).appendTo("#player");
			});
			$(document).on("click", function(){
				if (playerChosen){
					$("#player-bank").appendTo("#enemy");
				}
			});
		}
	

		else if (playerChosen && enemyChosen === false){
			$("#rza").on("click", function(){
				enemyChosen = true;
				enemy = clan.rza;
				id = "rza";
				$("#" + id).appendTo("#defender");
			});
			$("#gza").on("click", function(){
				enemyChosen = true;
				enemy = clan.gza;
				id = "gza";
				$("#" + id).appendTo("#defender");
			});
			$("#gfk").on("click", function(){
				enemyChosen = true;
				enemy = clan.gfk;
				id = "gfk";
				$("#" + id).appendTo("#defender");
			});
			$("#meth").on("click", function(){
				enemyChosen = true;
				enemy = clan.meth;
				id = "meth";
				$("#" + id).appendTo("#defender");
			});

		}
		else{

		}

		$("#battle").on("click", function(){

		});
	
	});

}); 