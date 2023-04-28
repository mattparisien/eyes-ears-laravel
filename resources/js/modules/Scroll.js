import LocomotiveScroll from 'locomotive-scroll';
import { module } from 'modujs';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default class extends module {
    constructor(m) {
        super(m);        
    }


    init() { 

        gsap.registerPlugin(ScrollToPlugin);


        if (!this.scroll) {
            this.scroll = new LocomotiveScroll({
                el: this.el,
                getDirection: true,
            });

            this.anchorLinks = Array.from(document.querySelectorAll('[data-scroll-behaviour="smooth"]'))
            this.headerRef   = this.modules.Header.main;
            this.sections    = Array.from(this.scroll.el.querySelectorAll("[data-scroll-section]"));
            this.lastSection = this.sections.slice(-1).pop();
            this.isBottom    = false;

        } else {
            this.scroll.update();
        }

        this.resize();
        this.initAnchorLinks();

        setTimeout(() => {
            this.scroll.update();
        }, 100);

        this.scroll.on('scroll', (args) => {
            this.scrollDirection = args.direction;
            
            const isDocumentBottom   = this.isDocumentBottom();
            
            if (isDocumentBottom && !this.isBottom) {
                this.isBottom = true;
            } else if (!isDocumentBottom && this.isBottom) {
                this.isBottom = false;
            }
        })

        this.scroll.on("call", (args, way, el) => {
            this.call(args[0], {way, args, el, scrollDirection: this.scrollDirection}, args[1], args[2]);
        })
    }

    initAnchorLinks() {
        this.anchorLinks.forEach(link => {
            link.addEventListener("click", e => {
                
                e.preventDefault();

                const target       = e.currentTarget.getAttribute("href");

                gsap.to(window, {
                    scrollTo: target,
                    duration: 2.4,
                    ease: 'expo.inOut'
                })
                                
            })
        })
    }

    setContainerHeight() {
        this.containerHeight = this.getContainerHeight();
    }

    getContainerHeight() {
        return this.container.getBoundingClientRect().height;
    }

    isDocumentBottom() {
        const {bottom}     = this.lastSection.getBoundingClientRect();
        const headerHeight = this.headerRef.height;

        if (bottom < headerHeight) {
            return true;
        }

        return false;
    }

    getSectionTheme(section) {
        const {color} = window.getComputedStyle(section);
        this.headerRef.el.style.color = color;
    }

    resize() {

        const scroller = this.scroll;

        window.addEventListener("resize", () => {
            scroller.update();
        })
    }

    isDocumentTop(args) {
        const headerHeight = this.headerRef.height;
        return args.scroll.y <= headerHeight;
    }

    lazyLoad({el}) {
        const img = new Image();

        const ctx = this;
        
        img.onload = () => {

            const callback = el.el.dataset.loadCall;

            if (callback) {
                const args = callback.split(",");
                ctx.call(args[0].trim(), null, args[1].trim(), args[2].trim());
            }

            el.el.src = el.el.dataset.src;
            el.el.classList.add("is-loaded");

            //Update the scroll instance once the image loads to recalculate height, since the image (may) have stretched th scroll container
            
        }

        img.src = el.el.dataset.src;
    }

    update() {
        this.scroll.update();
        this.setContainerHeight();
    }

    destroy() {
        this.scroll.destroy();
    }
}