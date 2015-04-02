//all event Listeners shold be here

var gameController = new GameController();

$(document).ready(function(e){
	$('#startBtn').click(function(){	
			gameController.startGame();
	});

	$(document).mousemove(function(e){
		gameController.saveCursor(e.pageX, e.pageY);
	});

});
