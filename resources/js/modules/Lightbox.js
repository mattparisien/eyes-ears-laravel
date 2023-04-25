import { module } from 'modujs';

export default class extends module {

    constructor(m) {
        super(m);
        this.el = m.el;
        this.loadContainer = this.el.querySelector("[data-load-container]");
        this.carouselId = this.el.querySelector("[data-module-carousel");
        this.closeBtn = this.el.querySelector("[data-lightbox-action='close']");
        this.isOpen = false;
        this.closeHandler = null;
        this.context = null;
    }
    

    init() {
        
    }

    show(context) {        

        this.context = context;

        this.el.classList.remove("hidden");
        
        setTimeout(() => {
            this.el.classList.add("is-open");
        }, 100);

        this.initContext();
    }

    hide() {

        if (this.closeHandler) this.closeBtn.removeEventListener("click", this.closeHandler);

            this.el.classList.remove("is-open");
            
            setTimeout(() => {
                this.el.classList.add("hidden");
            }, 1000);
        
    }

    loadSingleVimeo() {
        const iframe = this.modules.VimeoPlayer[this.context.id].template();
        console.log(iframe);
        this.loadContainer.innerHTML = iframe;
    }


    initContext() {
        switch(this.context.title) {
            case 'single-vimeo':
                    this.loadSingleVimeo();
        }
    }
   
    listenForClose() {
        this.closeHandler = this.hide;
        
        const context = this;
        this.closeBtn.addEventListener("click", () => this.hide(context));        
    }

    load() {
        
    }

}