let secondsElapsed=0
let interval=null;
const time=document.getElementById("time")


function setTime(){
    const minutes=Math.floor(secondsElapsed/60)
    const seconds=secondsElapsed%60
    time.innerHTML=`${minutes}:${seconds}`;
}


function timer(){
    secondsElapsed++;
    setTime()
}

function startclock(){
   if(interval) stopclock()
interval=setInterval(timer, 1000)
} 
function stopclock()
{
clearInterval(interval)
}
function resetclock()
{
stopclock()
secondsElapsed=0;
setTime()
}