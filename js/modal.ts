interface ISite {
	title: string;
	techs: string;
	desc: string;
	code: string;
	site: string;
	id: string;
}

const sites: ISite[] = [
	{
		title: 'Marvel information portal',
		techs: 'React, JavaScript, SCSS, Webpack, Babel, Bootstrap, Git',
		desc: 'Marvel Information Portal is a website that I have developed for Marvel fans. The character bio section is one of the key features of the website. Users can access detailed information about their favorite Marvel characters. One of the unique features of the Marvel Information Portal is the Random Characters section. Users can get information about a random Marvel character',
		code: 'https://github.com/Orest-M/marvel-info-portal/tree/main',
		site: 'https://orest-m.github.io/marvel-info-portal/',
		id: '1',
	},
	{
		title: 'Filmoteka',
		techs: 'JavaScript, HTML, SCSS, REAT API, Firebase, Parcel, Git',
		desc: 'Web application where you can register, find out information about a variety of movies, watch trailers, create your own library of watched films and films that you want to watch. My main technical task was to create modal windows that contain information from The Movie Database API about a particular movie. I tried several methods and chose the best one.',
		code: 'https://github.com/KonstantinYevchuk/Filmoteca_team_project',
		site: 'https://konstantinyevchuk.github.io/Filmoteca_team_project/',
		id: '2',
	},
	{
		title: 'Employees',
		techs: 'React, JavaScript, CSS, Webpack, Babel, Git, Bootstrap 5',
		desc: 'Web application for accounting of company employeers. In this application you can add or remove employees, find them by name. The application is implemented using React, CSS, Bootstrap 5, Webpack, Babel and git.',
		code: 'https://github.com/Orest-M/employees',
		site: 'https://orest-m.github.io/employees/',
		id: '3',
	},
	{
		title: 'Ice Cream',
		techs: 'HTML, SCSS, JavaScript, Parcel, Git',
		desc: "This site was a team project. We developed a landing website for an ice cream shop that was designed to create a delightful experience for the customer. The website was created with an attractive color palette. The website's design is simple and easy to navigate, with a clear menu that helps customers quickly find what they need. My main task was to create slider. I used JS library Owl Carousel 2.",
		code: 'https://github.com/Titotrapatonni/ice-cream-code-ninjas',
		site: 'https://titotrapatonni.github.io/ice-cream-code-ninjas/',
		id: '4',
	},
	{
		title: 'WebStudio',
		techs: 'HTML, CSS, SCSS, JavaScript, Git',
		desc: 'WebStudio is a landing website that I have developed to showcase the services provided by a web development company called "WebStudio". The main goal of this landing page is to provide visitors with a clear understanding of the services that WebStudio offers and to encourage them to contact the company for further information or to request a quote.',
		code: 'https://github.com/Orest-M/goit-markup-hw-08',
		site: 'https://orest-m.github.io/goit-markup-hw-08/',
		id: '5',
	},
	{
		title: 'Portfolio',
		techs: 'TypeScript, JavaScript, HTML, SCSS, Git',
		desc: "As a web developer, having a well-designed and functional portfolio website is essential for showcasing my skills, expertise, and previous projects to potential clients and employers. That's why I decided to develop my own portfolio website that showcases my reflects my personal style. My portfolio website is designed to be user-friendly and visually appealing, with a clean and modern design that emphasizes the projects and experiences that I want to showcase.",
		code: 'https://github.com/Orest-M/my-portfolio',
		site: 'http://orestmykhalchuk.com/',
		id: '6',
	},
	{
		title: 'TaskPro',
		techs: 'React, Redux Toolkit, Node.js, MongoDB, MUI, Git',
		desc: 'TaskPro is a user-friendly web application for task management and team collaboration. Serving as an analog to the popular platform Trello, TaskPro offers a seamless and intuitive interface that empowers users to organize their daily tasks, plan their schedules efficiently, and collaborate seamlessly with their teams and friends.',
		code: 'https://github.com/Fstv-Electro/TaskPro-prj-9',
		site: 'https://fstv-electro.github.io/TaskPro-prj-9/',
		id: '7',
	},
];

const list = document.querySelector('.portfolio__list') as HTMLUListElement;
const backdrop = document.querySelector('.backdrop') as HTMLDivElement;
const title = document.querySelector('.modal__title') as HTMLHeadingElement;
const techs = document.querySelector('.modal__techs') as HTMLParagraphElement;
const desc = document.querySelector('.modal__desc') as HTMLParagraphElement;
const code = document.querySelector('.modal__code') as HTMLAnchorElement;
const site = document.querySelector('.modal__site') as HTMLAnchorElement;
const body = document.querySelector('body') as HTMLBodyElement;
const modalClose = document.querySelector('.modal__close') as HTMLButtonElement;

list.addEventListener('click', getId);
modalClose.addEventListener('click', closeModal);

function getId(e): void {
	if (!e.target.dataset.id) {
		return;
	}

	const site: ISite[] = sites.filter((item) => item.id === e.target.dataset.id);

	createModal(site[0]);
	openModal();
}

function createModal(data: ISite): void {
	title.textContent = data.title;
	techs.textContent = data.techs;
	desc.textContent = data.desc;
	code.href = data.code;
	site.href = data.site;
}

function openModal(): void {
	backdrop.classList.remove('is-hidden');
	body.style.overflow = 'hidden';

	body.addEventListener('keydown', closeModalOnEsc);
	body.addEventListener('click', closeModalOnBackdrop);
}

function closeModal(): void {
	backdrop.classList.add('is-hidden');
	body.style.overflow = 'auto';

	body.removeEventListener('keydown', closeModalOnEsc);
	body.removeEventListener('click', closeModalOnBackdrop);
}

function closeModalOnBackdrop(e: Event): void {
	const target = e.target as Element;

	if (target.classList.value === 'backdrop') {
		closeModal();
	}
}

function closeModalOnEsc(e): void {
	if (e.key === 'Escape') {
		closeModal();
	}
}
