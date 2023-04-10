const menuBtn = document.querySelector(".toggle-button");
const menu = document.querySelector(".mobile-menu")
let isOpen = false;

menuBtn.addEventListener("click", () => {
    if (!isOpen) {
        menuBtn.classList.add("is-menu-open");
        menu.classList.add("is-show");
        menuBtn.setAttribute("aria-expanded", true);
        
        isOpen = true;
    } else {
        menuBtn.classList.remove("is-menu-open");
        menu.classList.remove("is-show");
        menuBtn.setAttribute("aria-expanded", false);
        isOpen = false;
    }
})