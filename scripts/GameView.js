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

	$('#gamebox').append(follower);

};

GameView.prototype.renderScore = function (game) {
	$('#score').html(game.score.toFixed(0))
};

GameView.prototype.renderendgame = function(){
    $('body').html("<h1>YOU LOSE</h1><div id= 'endgame'><img id= 'darcyendgame' src='Assets/darcyfinal.png'></div>");
            $('body').append("<h1>Game Will Restart In</div>")
            $('body').append("<div id='restarttimer'></div>")
            restartTimer = 10;
            setInterval(function() {
                
                $('#restarttimer').text(restartTimer)
                if(restartTimer == 0){
                    location.reload();
                }
                restartTimer -= 1;

            },
            1000)
}