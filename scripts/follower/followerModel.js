mouseX = 0;
mouseY = 0;

var randomHeight = function(){
  return Math.floor(Math.random() * $('#gamebox').height())
}

var randomWidth = function(){
  return Math.floor(Math.random() * $('#gamebox').width())
}

function Follower(){
console.log(randomHeight(), '||', randomHeight())
    this.element = $("<div class = 'follower'>  <img src = 'Assets/darcyicon.png'> </div>").css({
      "left" : 0,
      "top" : 0
    });
    
}
