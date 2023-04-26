import { first } from 'lodash';
import { module } from 'modujs';

export default class extends module {

    isHidden = false;

    constructor(m) {
        super(m);
        this.el = m.el;
        this.height = this.el.getBoundingClientRect().height;
        this.setInitialColor();

        this.menuToggler = document.querySelector("[data-header-menu-toggler]");
        this.menu = document.querySelector("[data-header-menu]");
        this.isMenuOpen = false;
        this.prevTheme = null;
        this.navSwitchBreakpoint = 768;

        this.onMenuToggle();
        this.onResize();
    }
    

    init() {
        
    }
    
    hide() {
        this.isHidden = !this.isHidden;
        this.el.classList.add("is-hidden");
    }

    show() {
        this.isHidden = !this.isHidden;
        this.el.classList.remove("is-hidden")
    }

       //Sets the initial color of the header on page load based on the first section
       setInitialColor() {
        const firstSection = document.querySelector("section[data-block-section]:nth-child(1)");
        const firstSectionTheme = firstSection.dataset.theme;
        
        this.setTheme(firstSectionTheme);
        this.initialTheme = firstSectionTheme;
    }

    setPrevTheme(theme) {
        this.prevTheme = theme;
    }

    onMenuToggle() {
        const toggler = this.menuToggler;
        const menu = this.menu;
        const header = this.el;
        const setPrevTheme = this.setPrevTheme.bind(this);
        const open = this.openMenu.bind(this);
        const close = this.closeMenu.bind(this);

        this.menuToggler.addEventListener("click", () => {

            
            this.isMenuOpen = !this.isMenuOpen;

        
            if (this.isMenuOpen) {

                setPrevTheme(header.dataset.theme);
                open();

            } else {
                close();
            }

        })
    }

    openMenu() {
        this.menuToggler.classList.add("is-menu-open");
        this.menuToggler.setAttribute("aria-expanded", true);

        this.menu.classList.add("is-show");
        this.menu.setAttribute("aria-expanded", true);

        this.el.setAttribute("data-theme", "dark");
    }

    closeMenu() {
        this.menuToggler.classList.remove("is-menu-open");
        this.menuToggler.setAttribute("aria-expanded", false);

        this.menu.classList.remove("is-show");
        this.menu.setAttribute("aria-expanded", false);

        this.el.setAttribute("data-theme", this.prevTheme);
    }

    setTheme(theme) {
        this.el.setAttribute("data-theme", theme);
    }

    getTheme() {
        return this.el.dataset.theme;
    }

    onResize() {

        const closeMenu = this.closeMenu.bind(this);
        const breakpoint = this.navSwitchBreakpoint;

        window.addEventListener("resize", () => {
            if (window.innerWidth > breakpoint) {
                    closeMenu();
            }
        })
    }

    themeUpdate({way, scrollDirection, el}) {
        if (way === "enter" && scrollDirection === "down") {
            this.setTheme("light");
            this.el.classList.remove("is-hero-header");
        } else if (way === "exit" && scrollDirection === "up") {
            this.setTheme(this.initialTheme);
            this.el.classList.add("is-hero-header");
            
        }
    }

    setHeroHeader() {

        if (!this.el.classList.contains("is-hero-header"))
        this.el.classList.add("is-hero-header");

        this.setInitialColor();
    }

    update() {
        this.setHeroHeader();
    }

}