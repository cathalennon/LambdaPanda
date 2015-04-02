function GameView() {

}

GameView.prototype.renderWelcome = function() {
	$('#gamebox p').text("You can start!!!");
};

GameView.prototype.renderTimer = function(game) {
	$('#timer').html(game.elapsedTime.toFixed(2)) 
};