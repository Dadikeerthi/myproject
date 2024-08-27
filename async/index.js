let a=10;
const myInterval=setInterval(function display()
{
    a++;
    console.log(a)
    if(a==15){
        clearInterval(myInterval);
    }
},1000)


//there are 2 timers in js, hese timers are provided by browsers
//every asynorus function in js must return promise
//what si promise,asyncronous,timer
//json library