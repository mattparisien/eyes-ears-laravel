import { first } from 'lodash';
import { module } from 'modujs';

export default class extends module {

    isHidden = false;

    constructor(m) {
        super(m);
        this.el = m.el;
        this.height = this.el.getBoundingClientRect().height;
        this.setInitialColor();
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

    setTheme(theme) {
        this.el.setAttribute("data-theme", theme);
    }

    getTheme() {
        return this.el.dataset.theme;
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