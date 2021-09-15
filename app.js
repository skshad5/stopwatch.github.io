const startWatch = document.getElementById('start');

const resetWatch = document.getElementById('reset');

const pauseWatch = document.getElementById('pause');

const minutesWatch = document.getElementById('minutes');
const secondsWatch = document.getElementById('seconds');


let min ;
let sec = 0;
let timer = null;

let watchRunning = false;

function start(){
 if(!watchRunning){
    watchRunning = true;
    timer = setInterval(function(){
        sec++; 
       let {min,second}= getTime(sec);
    
       minutesWatch.textContent = min < 10 ? ('0'+min):min;
       secondsWatch.textContent = second<10?('0'+second):second;
 },1000)
}

}

function reset(){
    watchRunning = false;
    clearInterval(timer);
    min = 0;
    sec = 0;
    minutesWatch.textContent = '00';
    secondsWatch.textContent = '00';

}

function pause(){
    watchRunning = false;
    clearInterval(timer);
}

function getTime(sec){
    min = parseInt(sec/60);
    let second = parseInt(sec%60);
    return{
        min,
        second
    }
}



startWatch.addEventListener('click', start);
resetWatch.addEventListener('click',reset);
pauseWatch.addEventListener('click',pause);