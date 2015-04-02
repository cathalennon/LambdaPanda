

function GameController () {
	this.game = new GameModel();
	this.gameView = new GameView();
}

GameController.prototype.startGame = function() {
		
	this.gameView.renderWelcome();
	this.startTimer();
}

GameController.prototype.startTimer = function() {
	setInterval(function(){
    	this.game.elapsedTime += 0.1 
    	this.gameView.renderTimer(this.game);
	}.bind(this),
	100);
};

