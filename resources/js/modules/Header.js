import { module } from 'modujs';

export default class extends module {

    isHidden = false;

    constructor(m) {
        super(m);
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

}