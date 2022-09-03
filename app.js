const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliSeconds = document.getElementById('miliSeconds');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const stopBtn = document.getElementById('stopBtn');

let hr = min = sec = ms = '0' +0;
let startTimer;


startBtn.addEventListener('click', () => {
    startBtn.classList.add('active');
    stopBtn.classList.remove('active-stop');

    setTimer = setInterval(() => {
        ms++;
        
        ms = ms < 10 ? '0' + ms : ms;

        if(ms == 100) {
            sec++;
        
            sec = sec < 10 ? '0' + sec : sec;
            ms = '0' + 0;
        }

        if(sec == 60) {
            min++;
        
            min = min < 10 ? '0' + min : min;
            sec = '0' + 0;
        }

        if(min == 60) {
            hr++;
        
            hr = hr < 10 ? '0' + hr : hr;
            min = '0' + 0;
        }
        
        updateValue();
    }, 10)
});

stopBtn.addEventListener('click', () => {
    startBtn.classList.remove('active');
    stopBtn.classList.add('active-stop');

    clearInterval(setTimer);
});

resetBtn.addEventListener('click', () => {
    startBtn.classList.remove('active');
    stopBtn.classList.remove('active-stop');

    clearInterval(setTimer);
    hr = min = sec = ms = '0' + 0;
    updateValue();

});

const updateValue = () => {
    miliSeconds.innerText = ms;
    seconds.innerText = sec;
    minutes.innerText = min;
}