function view() {


function timedText() {
    var x = document.getElementById('timer');
    var time = 0;
    var t1 = setInterval(function(){
      x.innerHTML = (time+= 1 )+ '.00'},
       1000);
}

timedText();

}
