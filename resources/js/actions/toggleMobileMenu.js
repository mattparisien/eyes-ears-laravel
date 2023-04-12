import STATES from "./states";
const menu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".toggle-button");
const header = document.querySelector(".global-header");

const toggleMobileMenu = () => {
    
    STATES.IS_MENU_OPEN = !STATES.IS_MENU_OPEN;

    if (STATES.IS_MENU_OPEN) {
        menuBtn.classList.add("is-menu-open");
        menu.classList.add("is-show");
        header.classList.add("is-dark");
        menuBtn.setAttribute("aria-expanded", true);
        menu.setAttribute("aria-expanded", true);
        STATES.IS_MENU_OPEN = true;
    } else {
        menuBtn.classList.remove("is-menu-open");
        menu.classList.remove("is-show");
        header.classList.remove("is-dark");
        menuBtn.setAttribute("aria-expanded", false);
        menu.setAttribute("aria-expanded", false);
        STATES.IS_MENU_OPEN = false;
    }
};

export default toggleMobileMenu;
