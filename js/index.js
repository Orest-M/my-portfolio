var menuBtn = document.querySelector('.mobile-menu-btn');
var menu = document.querySelector('.mobile-menu');
var menuNav = document.querySelector('.mobile-menu__nav');
var navItems = document.querySelectorAll('.mobile-menu__nav-item');
var navLinks = document.querySelectorAll('.mobile-menu__nav-link');
var body = document.querySelector('body');
var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
navLinks.forEach(function (item) { return item.addEventListener('click', toggleMenu); });
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(function (item) { return item.classList.add('show'); });
        showMenu = true;
        body.style.overflow = 'hidden';
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(function (item) { return item.classList.remove('show'); });
        showMenu = false;
        body.style.overflow = 'auto';
    }
}
