function Spawner(gameView){
	this.gameView = gameView;
}


Spawner.prototype.createFollower = function(){
	var follower = new Follower();
	this.gameView.renderFollower(follower.element);
	if (Math.random() * 10 < 1){
	//$('.soundId').trigger('play');
}
};