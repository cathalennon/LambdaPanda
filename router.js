$(document).ready(function(e){
	$(document).keyup(function(event){
	startGame(event);
});
});
function startGame(e) {
	 var code = e.keyCode || e.which;
	if(code == 13) {
		$('#gamebox p').text("You can start!!!");
		//use the controller function here to start game

    controller = new controller();
    controller.view();
	}
}
