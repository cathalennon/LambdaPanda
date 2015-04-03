mouseX = 0;
mouseY = 0;

var randomHeight = function(){
  return Math.floor(Math.random() * $('#gamebox').height())
}

var randomWidth = function(){
  return Math.floor(Math.random() * $('#gamebox').width())
}

function Follower(imgUrl){


    this.img = imgUrl; 
    this.element = $("<div class = 'follower'>  <img src = 'http://www.buckybox.com/images/team-joshua-63101086.jpg'> </div>").css({
      "left" : randomHeight,
      "top" : randomWidth
    });
    
}
