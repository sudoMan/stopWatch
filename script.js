let h = document.querySelector('#clock');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let continueBtn = document.querySelector('#continue');
let restartBtn = document.querySelector('#restart');

let milisecond = 0, second = 0, minute = 0, hour = 0;
let interval;

startBtn.addEventListener("click", start);
stopBtn.addEventListener('click', stop);
continueBtn.addEventListener('click', conti);
restartBtn.addEventListener('click', restart);

function start(){
    // clearInterval(interval);
    interval = setInterval(add, 1000);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    restartBtn.style.display = 'block';
}
function stop(){
    clearInterval(interval);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    continueBtn.style.display = 'block';
    restartBtn.style.display = 'block';
}
function conti(){
    clearInterval(interval);
    interval = setInterval(add, 1000);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    continueBtn.style.display = 'none';
    restartBtn.style.display = 'block';
}
function restart(){
    clearInterval(interval);
    minute=0, second = 0, hour = 0;
    h.textContent = '00:00:00';
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    continueBtn.style.display = 'none';
    restartBtn.style.display = 'none';
}

function add() {
    second += 1;
    if(second === 1000){
        second = 0;
        minute += 1;
        if(minute === 60){
            minute = 0;
            hour += 1;
        }
    }

    var asecond = second<10 ? '0' + second.toString(): second;
    var aminute = minute<10 ? '0' + minute.toString(): minute;
    var ahour = hour<10 ? '0' + hour.toString(): hour;

    h.textContent = `${ahour}:${aminute}:${asecond}`;
}