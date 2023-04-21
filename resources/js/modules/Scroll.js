import LocomotiveScroll from 'locomotive-scroll';
import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
    }


    init() { 
        if (!this.scroll) {
            this.scroll = new LocomotiveScroll({
                el: this.el,
                getDirection: true,
            });
            this.headerRef = this.modules.Header.global;
        } else {
            this.scroll.update();
        }

        // this.resize();

        // this.scroll.on('call', (func, way, obj, id) => {
            
        //     // this.call(fn, arg, "Scroll", "main")

           
        // });

        this.scroll.on('scroll', (args) => {
            this.scrollDirection = args.direction;
            // const isTop = this.isDocumentTop(args);
            
            
            
            // console.log('hello!')
            // const isDocumentBottom   = args.delta.y >= args.limit.y;
            // const header             = this.modules.Header.global;
            // const isHeaderHidden     = header.isHidden;
            // const hasHtmlBottomClass = html.classList.contains("is-page-bottom");

            // if (isDocumentBottom && !hasHtmlBottomClass) {
            //     html.classList.add("is-page-bottom")
            // } else if (!isDocumentBottom && hasHtmlBottomClass) {
            //     html.classList.remove("is-page-bottom");
            // }
        })


   
        this.scroll.on("call", (args, way, el) => {
            this.call(args[0], {way, args, el, scrollDirection: this.scrollDirection}, args[1], "main");
        })


    }



    getSectionTheme(section) {
        const {color} = window.getComputedStyle(section);
        this.headerRef.el.style.color = color;
    }

    

    resize() {
        window.addEventListener("resize", () => {
            
            this.scroll.update();
        })
    }

    isDocumentTop(args) {
        const headerHeight = this.headerRef.height;
        return args.scroll.y <= headerHeight;
    }

    update() {
        this.scroll.update();
    }

    destroy() {
        this.scroll.destroy();
    }
}