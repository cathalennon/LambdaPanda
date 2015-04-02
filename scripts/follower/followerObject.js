mouseX = 0;
mouseY = 0;

function follower(imgUrl){

    this.img = imgUrl; 
    mousemove();
    
}

  
 

   // cache the selector
   var follower = $(".follower");
   var xp = 0, yp = 0;
   var loop = setInterval(function(){
       // change number to alter damping higher is slower
       xp += (mouseX - xp) / 25; // speed of follower
       yp += (mouseY - yp) / 25;
       follower.css({left:xp, top:yp});

   }, 30);


