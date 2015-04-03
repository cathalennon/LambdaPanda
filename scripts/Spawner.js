function Spawner(gameView){
	this.gameView = gameView;
}


Spawner.prototype.createFollower = function(){
	var follower = new Follower('../Assets/test.png');
	this.gameView.renderFollower(follower.element);

};