var timer =60;
var score = 0;
var hitrn;

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}
function decreasescore(){
    score -= 10;
    document.querySelector('#scoreval').textContent = score;
}

function makebubble(){
    var clutter = "";

for(var i=1; i<150; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div> `;
}

document.querySelector('#pbtm').innerHTML = clutter
}

function runTimer(){
 var timerint =   setInterval(function()
   {
    if(timer > 0){

        timer--;
        document.querySelector('#timerval').textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector('#pbtm').innerHTML = `<h1 id="over">Game Over</h1>`;
    }
   },1000);
}

function getNewHit(){
 hitrn=    Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function resetScore(){
    score =0;
    makebubble();
    getNewHit();

}

document.querySelector('#pbtm').addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }


    else{
        decreasescore();
        makebubble();
        getNewHit();
        // if(score >0){

           
        // }
      
    }
});

getNewHit();
runTimer();
makebubble();
