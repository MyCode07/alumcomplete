const header = document.querySelector('header');
const headerheigth = header.getBoundingClientRect().height;
const hero = document.querySelector('section.hero');

const sticky = () => {
    if (window.scrollY > 50) {
        header.classList.add('_scrolled')
        if (hero) header.classList.add('_sticky')
    }
    else {
        header.classList.remove('_scrolled')
        if (hero) header.classList.remove('_sticky')
    }
}

sticky();
window.addEventListener('scroll', sticky);