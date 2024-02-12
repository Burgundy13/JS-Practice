let toggleBtn = document.querySelectorAll('.btn');

toggleBtn.forEach((btn) => {
	btn.addEventListener('click', toggleFaq);
});

function toggleFaq() {
	this.parentNode.classList.toggle('active');
}
