const menuBtn = document.querySelector('.mobile-menu-btn') as HTMLDivElement;
const menu = document.querySelector('.mobile-menu') as HTMLElement;
const menuNav = document.querySelector('.mobile-menu__nav') as HTMLUListElement;
const navItems = document.querySelectorAll('.mobile-menu__nav-item');
const navLinks = document.querySelectorAll('.mobile-menu__nav-link');
const body = document.querySelector('body') as HTMLBodyElement;

let showMenu: boolean = false;

menuBtn.addEventListener('click', toggleMenu);
navLinks.forEach((item) => item.addEventListener('click', toggleMenu));

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));
		showMenu = true;
		body.style.overflow = 'hidden';
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));
		showMenu = false;
		body.style.overflow = 'auto';
	}
}
