function Spawner(gameView){
	this.gameView = gameView;
}
Spawner.prototype.createFollower = function(){
	var follower = new Follower();
	this.gameView.renderFollower(follower);
};