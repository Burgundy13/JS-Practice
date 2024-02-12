let container = document.querySelector('.container');
let testimonial = document.querySelector('.testimonial');
let userImage = document.querySelector('.user-img');
let userName = document.querySelector('.user-name');
let role = document.querySelector('.role');

let data = [
	{
		name: 'Mirage Amur',
		position: 'Marketing',
		photo: 'https://randomuser.me/api/portraits/women/2.jpg',
		text: '	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia oditnihil laboriosam ad eveniet, sed, quas vero, excepturi doloribus perferendis corrupti nisi labore doloremque blanditiis similique. Cum velit omnis provident, consectetur temporibus iusto quia illo.',
	},
	{
		name: 'Amanda Mons',
		position: 'SEO',
		photo: 'https://randomuser.me/api/portraits/women/25.jpg',
		text: '	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia oditnihil laboriosam ad eveniet, sed, quas vero, excepturi doloribus perferendis corrupti nisi labore doloremque blanditiis similique. Cum velit omnis provident, consectetur temporibus iusto quia illo.',
	},
	{
		name: 'Plane Jane',
		position: 'Developer',
		photo: 'https://randomuser.me/api/portraits/women/13.jpg',
		text: '	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia oditnihil laboriosam ad eveniet, sed, quas vero, excepturi doloribus perferendis corrupti nisi labore doloremque blanditiis similique. Cum velit omnis provident, consectetur temporibus iusto quia illo.',
	},
];

let current = 1;

function change() {
	const { name, position, photo, text } = data[current];

	testimonial.innerHTML = text;
	userImage.src = photo;
	userName.innerHTML = name;
	role.innerHTML = position;

	current++;

	if (current > data.length - 1) {
		current = 0;
	}
}

setInterval(change, 10000);
