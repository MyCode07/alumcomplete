import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');

if (sliders.length) {
    sliders.forEach(slider => {
        let prev = slider.querySelector('.prev')
        let next = slider.querySelector('.next')
        let pagination = slider.querySelector('.pagination')

        new Swiper(slider, {
            modules: [
                Pagination, Navigation, Autoplay,
            ],
            lazy: true,
            loop: true,
            slidesPerView: 1,

            autoplay: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            pagination: {
                el: pagination,
                clickable: true
            },

            navigation: {
                prevEl: prev,
                nextEl: next,
            },
        })
    })
}