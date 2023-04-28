import { module } from 'modujs';
import Masonry from 'masonry-layout';

export default class extends module {

    constructor(m) {
        super(m);
        this.el = m.el;
    }
    
    reloadLayout() {
        this.msnry?.layout();
    }

    init() {
        this.msnry = new Masonry(this.el, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer'
        });

        this.initLightboxOnClick();
    }
   

    initLightboxOnClick() {

        const handleClick = e => {
            this.call('show', null, "Lightbox", "m2");
        }

        this.msnry.items.forEach(item => {
            item.element.addEventListener("click", handleClick);
        })
    }

}