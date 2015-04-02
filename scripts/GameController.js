function GameController () {
	this.game = new GameModel();
	this.gameView = new GameView();
}

GameController.prototype.startGame = function() {
		
	this.gameView.renderWelcome();
	this.startTimer();
	this.startChase();
}

GameController.prototype.startTimer = function() {
	setInterval(function(){
    	this.game.elapsedTime += 0.1 
    	this.gameView.renderTimer(this.game);
	}.bind(this),
	100);
};

GameController.prototype.saveCursor = function(x,y) {

	this.game.cursorPositionX = x;
	this.game.cursorPositionY = y;

}
GameController.prototype.startChase = function(){

	
}