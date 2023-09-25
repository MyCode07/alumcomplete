import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');

menu.style.maxHeight = `calc(100% - ${header.getBoundingClientRect().height}px)`;

if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');


        if (!header.classList.contains('_scrolled')) {
            header.classList.toggle('_sticky');
        }

        if (menu.classList.contains('_open')) {
            lockPadding();
            setMenuTopPosition();
        }
        else {
            unLockPadding()
            resetMenuTopPosition();
        }
    })
}

function setMenuTopPosition() {
    menu.style.top = header.getBoundingClientRect().height + 'px';
}

function resetMenuTopPosition() {
    menu.style.top = 0;
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any())
                if (menu.classList.contains('_open')) unLockPadding();
                else lockPadding()

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');

            body.classList.toggle('_noscroll');
        })
    })
}


const arrow = `<button><svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7"  >
  <path d="M1 1L4.59306 5.15864C4.98147 5.60818 5.67385 5.62196 6.07983 5.18822L10 1" stroke-width="1.5" stroke-linecap="round"/>
</svg></button>
`;

const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');

        if (submenu) {
            const link = submenu.previousElementSibling;
            link.insertAdjacentHTML('afterend', arrow);

            const btn = li.querySelector('button');

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })


    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }

}