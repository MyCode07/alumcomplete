const galleryBox = document.querySelectorAll('.gallery__grid');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxImgSrc = lightboxImg;

for (let i = 0; i < galleryBox.length; i++) {
    const img = galleryBox[i];

    img.addEventListener('click', (e) => {
        let targetImageSrc = e.target.querySelector('img')

        lightbox.classList.toggle('_open');
        lightboxImgSrc.src = targetImageSrc.src;
    })

    lightbox.addEventListener('click', (e) => {
        if (e.target.className = 'lightbox') {
            lightbox.classList.remove('_open');
        }
    })
}

