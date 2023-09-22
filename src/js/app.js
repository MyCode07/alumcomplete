import "./static/side-fixed.js";
import { accorden } from "./static/accordeon.js";
import { maskInputs } from "./static/inputmask.js";
import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";
import { toTop } from "./static/to-top.js";
import { gallery } from "./parts/gallery.js";


import "./parts/menu.js";
import "./parts/header.js";
import "./parts/popup.js";
import "./parts/slider.js";

gallery();
toTop();
replaceDomElements();
runTicker()
accorden();
maskInputs('+7 999 999 999 999', '.phone')