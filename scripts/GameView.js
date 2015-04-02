//all access to HTML elements here
function GameView() {

}

GameView.prototype.renderWelcome = function() {
	$('#gamebox p').text("You can start!!!");
};

GameView.prototype.renderTimer = function(game) {
	$('#timer').html(game.elapsedTime.toFixed(2)) 
};
GameView.prototype.renderFollower = function(follower) {
	console.log("Hello there, I need to eat")
}
