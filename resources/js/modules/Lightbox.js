import { module } from 'modujs';

export default class extends module {

    constructor(m) {
        super(m);
        this.el = m.el;
        this.carouselId = this.el.querySelector("[data-module-carousel");
        this.closeBtn = this.el.querySelector("[data-event-action='close-lightbox']");
        this.isOpen = false;
        this.closeHandler = null;
    }
    

    init() {
        
    }

    show() {

        if (!this.closeHandler) this.listenForClose();


        this.el.classList.remove("hidden");
        setTimeout(() => {
            this.el.classList.remove("opacity-0");
        }, 100);

        this.load();
    }

    hide() {

        if (this.closeHandler) this.closeBtn.removeEventListener("click", this.closeHandler);


        this.el.classList.add("opacity-0");
        setTimeout(() => {
            this.el.classList.add("hidden");
        }, 200);
    }
   
    listenForClose() {
        this.closeHandler = this.hide;
        
        const context = this;
        this.closeBtn.addEventListener("click", () => this.hide(context));        
    }

    load() {
        
    }

}