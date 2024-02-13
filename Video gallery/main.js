const showVideoEl = document.querySelector('.show-video');
const videos = document.querySelectorAll('.video-container video');
const mainVideoEl = document.querySelector('.show-video video');
const timeEl = document.querySelector('.show-video span');

videos.forEach((video) => {
	video.addEventListener('click', showVideo);
});

function showVideo() {
	mainVideoEl.src = this.src;
	showVideoEl.style.display = 'block';
}

timeEl.addEventListener('click', hideVideo);

function hideVideo() {
	showVideoEl.style.display = 'none';
}
