import "./static/side-fixed.js";
import { accorden } from "./static/accordeon.js";
import { maskInputs } from "./static/inputmask.js";
import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";
import { toTop } from "./static/to-top.js";


import "./parts/menu.js";
import "./parts/header.js";
import "./parts/galler.js";
import "./parts/popup.js";
import "./parts/slider.js";

toTop();
replaceDomElements();
runTicker()
accorden();
maskInputs('+7 999 999 999 999', '.phone')



const inputFile = document.getElementById("file");

const fileNameBlok = ` <span class="filename" id="output">
                            <li></li>
                            <svg class="delete" width="17" height="17"
                                viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8797 16.1291L0.621372 2.87082L2.87124 0.62095L16.1295 13.8792L13.8797 16.1291ZM2.87128 16.1291L0.621368 13.8792L13.8796 0.620941L16.1295 2.87085L2.87128 16.1291Z"
                                    fill="#4A4A4A" />
                            </svg>
                        </span>
`;


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


