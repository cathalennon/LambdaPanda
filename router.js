//all event Listeners shold be here

var gameController = new GameController();

$(document).ready(function(e){
	$(document).keyup(function(event){
		var code = event.keyCode || event.which;
		if(code == 13) {
			gameController.startGame();
		}
	});



 $(document).mousemove(function(e){
      
    gameController.saveCursor(e.pageX, e.pageY);

  });
});
