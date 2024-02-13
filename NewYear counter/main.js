const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const newyear = document.querySelector('#newyear');
const countdown = document.querySelector('#countdown');
const loading = document.querySelector('.loading');

const currentYear = new Date().getFullYear();

newyear.innerHTML = currentYear + 1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function countdownTime() {
	const currentTime = new Date();
	const different = newYearTime - currentTime;

	const d = Math.floor(different / 1000 / 60 / 60 / 24);
	const h = Math.floor((different / 1000 / 60 / 60) % 24);
	const m = Math.floor((different / 1000 / 60) % 60);
	const s = Math.floor((different / 1000) % 60);

	days.innerHTML = d < 10 ? `0${d}` : d;
	hours.innerHTML = h < 10 ? `0${h}` : h;
	minutes.innerHTML = m < 10 ? `0${m}` : m;
	seconds.innerHTML = s < 10 ? `0${s}` : s;
}
setTimeout(() => {
	loading.remove();
	countdown.style.display = 'flex';
}, 1000);
setInterval(countdownTime, 1000);
