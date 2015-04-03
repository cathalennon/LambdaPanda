//all event Listeners shold be here

var gameController = new GameController();

$(document).ready(function(e){
	$('#startBtn').click(function(){	
			gameController.startGame();
	});
	var mouseX = 0;
	var mouseY = 0;
	var xp = 0;
	var yp = 0;
	$(document).mousemove(function(e){
		gameController.saveCursor(e.pageX, e.pageY);
		mouseX = e.pageX;
		mouseY = e.pageY;
	});

	var updatePositionloop = setInterval(function() {
		console.log("im looping")
		$('.follower').each(function(i, follower){
			xp = $(follower).position().left
			yp = $(follower).position().top
			xp += Math.random() * 10-5 + (mouseX - xp) / 50;		
			yp += Math.random() * 10-5 + (mouseY - yp) / 50;
			$(follower).css({
				'left' : xp,
				'top' : yp
			});
		})
		
		
	}, 30 );

});
