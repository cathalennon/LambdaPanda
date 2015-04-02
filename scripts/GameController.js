function GameController() {
	this.game = new GameModel();
	this.gameView = new GameView();
	this.spawner = new Spawner(this.gameView);
};
GameController.prototype.startGame = function() {
	this.gameView.renderWelcome();
	this.startTimer();	
};

GameController.prototype.startTimer = function() {
	setInterval(function(){
    	this.game.elapsedTime += 0.1 
    	this.gameView.renderTimer(this.game);
    	if (Math.random() * 25 < 1){
    		this.spawner.createFollower();
    	}
	}.bind(this),
	100);
};

//GameController.prototype.startSpawner = function() {
	//every 30? seconds
//	this.game.elapsedTime += ((Math.random() * 15))
			// create a new follower using the spawner object
			// tell the game view to render the follower
//