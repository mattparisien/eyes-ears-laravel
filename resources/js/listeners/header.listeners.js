import { toggleMobileMenu } from "../actions";
import STATES from "../actions/states";

const menu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".toggle-button");

const navSwitchBreakpoint = 768;

//Toggle the menu on button click
menuBtn.addEventListener("click", (e) => {
    toggleMobileMenu();
});

//Toggle the menu on resize if the screen exceeds a desktop breakpoint
window.addEventListener("resize", () => {
    if (STATES.IS_MENU_OPEN) {
        if (window.innerWidth > navSwitchBreakpoint) {
            toggleMobileMenu();
        }
    }
});

//Detect click outside the inner part of the menu, toggle if clicked
menu.addEventListener("click", (e) => {
    if (e.target == menu) toggleMobileMenu();
});
