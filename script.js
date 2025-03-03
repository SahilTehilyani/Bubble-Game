function makeBubble(){
    var clutter = "";

    for (var i = 0; i <= 74; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();


var timer = 60;
function runTime(){
   var timerint = setInterval(function (){
    if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    } else {
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
   }, 1000)
}
runTime();


var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (e) {
   var clickednum = Number(e.target.textContent);
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});


