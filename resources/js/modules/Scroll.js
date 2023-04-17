import { module } from 'modujs';
import LocomotiveScroll from 'locomotive-scroll';
import { html } from "../utils/environment";

export default class extends module {
    constructor(m) {
        super(m);
    }


    init() {
        this.scroll = new LocomotiveScroll({
            el: this.el,
            smooth: true
        });

        this.resize();

        this.scroll.on('call', (func, way, obj, id) => {
            // this.call(fn, arg, "Scroll", "main")

           
        });

        this.scroll.on('scroll', (args) => {
            
            const isDocumentBottom   = args.delta.y >= args.limit.y;
            const header             = this.modules.Header.global;
            const isHeaderHidden     = header.isHidden;
            const hasHtmlBottomClass = html.classList.contains("is-page-bottom");

            if (isDocumentBottom && !hasHtmlBottomClass) {
                html.classList.add("is-page-bottom")
            } else if (!isDocumentBottom && hasHtmlBottomClass) {
                html.classList.remove("is-page-bottom");
            }
        })
    }

    

    resize() {
        window.addEventListener("resize", () => {
            
            this.scroll.update();
        })
    }

    destroy() {
        this.scroll.destroy();
    }
}