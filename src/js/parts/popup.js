import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

const popupAll = document.querySelectorAll('.popup');
const popupOpenButtons = document.querySelectorAll('[data-open-popup]');

if (popupOpenButtons.length)
    popupOpenButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = btn.dataset.id;
            const popup = document.querySelector(`.popup#${id}`);

            if (popup) {
                popup.classList.add('_open');
                document.body.classList.add('_noscroll');

                lockPadding()
            }
        })
    })

if (popupAll.length)
    popupAll.forEach(popup => {
        const popupClose = popup.querySelector('.popup__close');

        popupClose.addEventListener('click', function () {
            popup.classList.remove('_open');
            document.body.classList.remove('_noscroll');

            unLockPadding()
        })

        popup.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup')) {
                popup.classList.remove('_open')
                document.body.classList.remove('_noscroll');
                unLockPadding()
            }
        })
    })


const inputFile = document.getElementById("file");
if (inputFile) {
    inputFile.addEventListener("change", (e) => {
        const files = e.target.files;

        for (const file of files) {

            const filenameBefore = document.querySelector('.filename-before');
            filenameBefore.insertAdjacentHTML('afterend', fileNameBlok);

            let fileName = document.querySelector('.filename li');
            fileName.textContent = file.name

            //------------------file delete---------------------
            const fileDelete = document.querySelectorAll('.delete');

            for (let i = 0; i < fileDelete.length; i++) {
                const element = fileDelete[i];

                element.addEventListener('click', (e) => {
                    let targetFile = e.target.closest(".filename")
                    targetFile.style.display = "none";
                })
            }
        }
    });
}


let fileNameBlok = ` <span class="filename" id="output">
                            <li></li>
                            <svg class="delete" width="17" height="17"
                                viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8797 16.1291L0.621372 2.87082L2.87124 0.62095L16.1295 13.8792L13.8797 16.1291ZM2.87128 16.1291L0.621368 13.8792L13.8796 0.620941L16.1295 2.87085L2.87128 16.1291Z"
                                    fill="#4A4A4A" />
                            </svg>
                        </span>
`;