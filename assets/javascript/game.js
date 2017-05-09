var clan = {

	rza : {
		hp : 100,
		ap : 2,
		cap : 10,
	},

	gza : {
		hp : 120,
		ap : 4,
		cap : 15,
	},

	gfk : {
		hp : 140,
		ap : 5,
		cap : 20,
	},

	meth : {
		hp : 160,
		ap : 1,
		cap : 25,
	},
}
var playerChosen = false;
var enemyChosen = false;
var player;
var enemy;
var id;
var enemyId;


$(document).ready(function(){

	$.each(clan, function(key){
		$("#" + key + "-hp").text(this.hp);
	});


		
			$("#rza").on("click", function(){
				if (playerChosen === false){
				playerChosen = true;
				player = clan.rza;
				id = "rza";
				$("#" + id).appendTo("#player");
			}
				else if (playerChosen && !enemyChosen){
				enemyChosen = true;
				enemy = clan.rza;
				enemyId = "rza";
				$("#" + enemyId).appendTo("#defender");
			}
			else{}
			});
			$("#gza").on("click", function(){
				if (playerChosen === false){
				playerChosen = true;
				player = clan.gza;
				id = "gza";
				$("#" + id).appendTo("#player");
			}
				else if (playerChosen && !enemyChosen){
				enemyChosen = true;
				enemy = clan.gza;
				enemyId = "gza";
				$("#" + enemyId).appendTo("#defender");
				}
			});
			$("#gfk").on("click", function(){
				if (playerChosen === false){
				playerChosen = true;
				player = clan.gfk;
				id = "gfk";
				$("#" + id).appendTo("#player");
			}
				else if (playerChosen && !enemyChosen){
				enemyChosen = true;
				enemy = clan.gfk;
				enemyId = "gfk";
				$("#" + enemyId).appendTo("#defender");
				}
			});
			$("#meth").on("click", function(){
				if (playerChosen === false){
				playerChosen = true;
				player = clan.meth;
				id = "meth";
				$("#" + id).appendTo("#player");
			}
				else if (playerChosen && !enemyChosen){
				enemyChosen = true;
				enemy = clan.meth;
				enemyId = "meth";
				$("#" + enemyId).appendTo("#defender");
				}
			});
			$(document).on("click", function(){
				if (playerChosen){
					$("#player-bank").appendTo("#enemy");
				}
			});

		


		$("#battle").on("click", function(){
			enemy.hp = enemy.hp - player.ap;
			player.hp = player.hp - enemy.cap;
			player.ap = player.ap += player.ap;
			console.log(player.hp);
			$.each(clan, function(key){
			$("#" + key + "-hp").text(this.hp);
			});
			$("#messenger").html("<div>You attacked for " + player.ap + "!</div><div>Your enemy countered for " + enemy.cap + "!</div");

			if (enemy.hp <= 0){
				$("#" + enemyId).hide();
				enemy = "";
				enemyChosen = false;
				enemyId = "";
				$("#messenger").html("<div>You defeated your enemy.  Choose another and continue the battle</div");
			}
			else if (player.hp <= 0){
				$("#" + id).hide();
				player = "";
				playerChosen = false;
				id = "";
				$("#messenger").html("<div>You died.  Refresh the page to play again</div");
			}
		});
	});
	
 