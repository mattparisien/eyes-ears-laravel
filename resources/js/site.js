// This is all you.

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import Alpine from "alpinejs";
import modular from "modujs";
import * as modules from "./modules";
import { isPreview } from "./utils/environment";

const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.onload = (e) => {
    init();
};

const init = () => {

    Alpine.start();

    const app = new modular({
        modules: modules,
    });

    app.init(app);

    setVh();

    window.addEventListener("resize", setVh);
};
