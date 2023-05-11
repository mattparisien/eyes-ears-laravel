import { module } from 'modujs';

export default class extends module {

    constructor(m) {
        super(m);
        this.el = m.el;
        this.loadContainer = this.el.querySelector("[data-load-container]");
        this.carouselId = this.el.querySelector("[data-module-carousel");
        this.openBtns = document.querySelectorAll("[data-lightbox-action='open']")
        this.closeBtn = this.el.querySelector("[data-lightbox-action='close']");
        this.isOpen = false;
        this.closeHandler = null;
        this.context = null;

        this.onOpen();
        this.onClose();
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
                this.loadContainer.innerHTML = "";
            }, 1000);
        
    }

    loadSingleVideo() {
        const el = this.modules.VideoPlayer[this.context.id].template(this.context.title);
        this.loadContainer.innerHTML = el;
    }

    initContext() {
        switch(this.context.title) {
            case 'single-video':
            case 'single-vimeo':
                    this.loadSingleVideo();
                    break;
            case 'carousel':
                    this.loadCarousel();
                    break;
        }
    }

    loadCarousel() {
        const carouselModuleTitle = this.context.target.dataset.carousel;
        this.call('createSwiper', null, 'Carousel', carouselModuleTitle);
        
        const module    = this.modules.Carousel[carouselModuleTitle];
        const container = this.context.target.parentNode;
        const items     = [...[...container.querySelectorAll(`[data-carousel='${carouselModuleTitle}']`)].map(node => node.querySelector("[data-lightbox-carousel-item]"))];        

        const onCreate = (templateItem) => {
            module.swiper.wrapperEl.appendChild(templateItem);
        }

        const template = module.template(items, onCreate);

        module.el.classList.remove('hidden');
        
        
        
    }

    onClose() {
        const context = this;
        this.closeBtn.addEventListener("click", context.hide.bind(context))
    }

    onOpen() {
        const ctx = this;
        this.openBtns.forEach(btn => {

            const onClick = e => {
                ctx.show({
                    title: e.currentTarget.dataset.lightboxContext,
                    target: e.currentTarget,
                    id: e.currentTarget.dataset.lightboxId
                });
            }

            btn.addEventListener("click", onClick);


        })  
    }

    destroy() {
        this.openBtns.forEach(btn => {
            btn.replaceWith(btn.cloneNode(true));
        })

        this.closeBtn.replaceWith(this.closeBtn.cloneNode(true))
    }

    update() {
        this.openBtns = document.querySelectorAll("[data-lightbox-action='open']")
        this.closeBtn = this.el.querySelector("[data-lightbox-action='close']");
        this.isOpen = false;
        this.closeHandler = null;
        this.context = null;

        this.onOpen();
        this.onClose();
    }

}