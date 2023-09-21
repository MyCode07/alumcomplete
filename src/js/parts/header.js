const header = document.querySelector('header');
const headerheigth = header.getBoundingClientRect().height;

const sticky = () => {
    if (window.scrollY > 50) {
        header.classList.add('_scrolled')
        header.classList.add('_sticky')
    }
    else {
        header.classList.remove('_sticky')
        header.classList.remove('_scrolled')
    }
}

sticky();
window.addEventListener('scroll', sticky);