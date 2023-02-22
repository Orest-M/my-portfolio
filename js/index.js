const menuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.mobile-menu');
const menuNav = document.querySelector('.mobile-menu__nav');
const navItems = document.querySelectorAll('.mobile-menu__nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));
    showMenu = true;
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));
    showMenu = false;
    document.querySelector('body').style.overflow = 'auto';
  }
}
