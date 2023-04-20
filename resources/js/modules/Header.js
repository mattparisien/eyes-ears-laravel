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
        const firstSection = document.querySelector(".block-section:nth-child(1)");
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

    themeUpdate({direction}) {
        if (direction === "enter") {
            this.setTheme("light");
            this.el.classList.remove("is-hero-header");

            this.hasThemeUpdated = !this.hasThemeUpdated;

        } else if (direction === "exit" && !this.hasThemeUpdated) {
            this.setTheme(this.initialTheme);
            this.el.classList.add("is-hero-header");
        }

        
        
    }

}