import { toggleMobileMenu } from "../actions";
import STATES from "../actions/states";
const menuBtn = document.querySelector(".toggle-button");

const navSwitchBreakpoint = 768;

menuBtn.addEventListener("click", (e) => {
    toggleMobileMenu(e.currentTarget);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > navSwitchBreakpoint && STATES.isMenuOpen) {
        toggleMobileMenu(menuBtn);
    }
});
