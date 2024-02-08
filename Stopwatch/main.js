let time = document.querySelector('.time');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let interval;

let seconds = 0;

function stopwatch() {
	seconds++;

	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds - hours * 3600) / 60);
	let sec = seconds % 60;

	hours < 10 ? (hours = `0${hours}`) : hours;
	minutes < 10 ? (minutes = `0${minutes}`) : minutes;
	sec < 10 ? (sec = `0${sec}`) : sec;

	time.innerHTML = `${hours}:${minutes}:${sec}`;
}

function start() {
	if (interval) {
		return;
	}
	interval = setInterval(stopwatch, 1000);
}

function stop() {
	clearInterval(interval);
	interval = null;
}

function reset() {
	stop();
	seconds = 0;
	time.innerHTML = `00:00:00`;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
