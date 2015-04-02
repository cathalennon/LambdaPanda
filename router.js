$(document).ready(function(e){
	var gameController = new GameController();
	$(document).keyup(function(event){
		var code = event.keyCode || event.which;
		if(code == 13) {
			gameController.startGame();
		}
	});
});

