// This is all you.
import modular from "modujs";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import config from "./config";
import { html } from "./utils/environment";
import * as modules from "./modules";
import Alpine from "alpinejs";
import "./listeners/header.listeners";


const app = new modular({
    modules: modules,
});

window.onload = (e) => {
    init();
};


const init = () => {
    Alpine.start();
    app.init(app);

    html.classList.add(config.CSS_CLASS.LOADED);
    html.classList.add(config.CSS_CLASS.READY);
    html.classList.remove(config.CSS_CLASS.LOADING);
};
