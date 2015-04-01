$(document).ready(function(){
	$(document).keypress(startGame(e));
});
function startGame(e) {
	if(e.keyCode === 13) {
		console.log("You can start");
		//use the controller function here to start game
	}
}
ready(startGame());