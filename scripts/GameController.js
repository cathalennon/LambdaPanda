function GameController() {
	this.game = new GameModel();
	this.gameView = new GameView();
	this.spawner = new Spawner(this.gameView);
};

GameController.prototype.startGame = function() {
	this.gameView.renderWelcome();
	this.startChase();
	this.startTimer();
	$('.soundTheme').trigger('play');
	$('.soundId').trigger('play');

};

GameController.prototype.startTimer = function() {
	setInterval(function(){
            this.game.elapsedTime += 0.1;
            this.gameView.renderTimer(this.game);
            this.showScore();
            if (Math.random() * 5 < 1){
            this.spawner.createFollower();                     
            }

      }.bind(this), 100);
	
};

GameController.prototype.saveCursor = function(x,y) {

	this.game.cursorPositionX = x;
	this.game.cursorPositionY = y;

}

GameController.prototype.startChase = function(){


}


GameController.prototype.showScore = function() {
	this.game.score = this.game.elapsedTime*4; //5 points per second
	this.gameView.renderScore(this.game);
}


GameController.prototype.checkCollision = function(x,y){
    $('.follower').each(function(i, follower){
        // console.log($(follower).position().left < (x + 50) && $(follower).position().left > (x - 50));
        if($(follower).offset().left < (x + 5) && $(follower).offset().left > (x - 5) && $(follower).offset().top < (y + 5) && $(follower).offset().top > (y - 5)){
            $('body').html("<img src='http://www.buckybox.com/images/team-joshua-63101086.jpg'>");
        }
 });

}

