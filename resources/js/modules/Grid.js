import { module } from 'modujs';
import Masonry from 'masonry-layout';

export default class extends module {

    constructor(m) {
        super(m);
        this.el = m.el;
    }
    

    init() {
        this.msnry = new Masonry(this.el, {
            itemSelector: '.grid-item',
        })
    }
   


}