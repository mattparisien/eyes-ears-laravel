// This is all you.

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import config from "./config";
import { html } from "./utils/environment";
import Alpine from "alpinejs";
import initRouteAnimation from "./animation/route.animation";
import "./listeners/header.listeners";

window.onload = (e) => {
    init();
};

const init = () => {
    Alpine.start();
    initRouteAnimation();
};
