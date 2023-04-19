import { module } from 'modujs';
import SplitText from 'gsap/SplitText';
 
export default class extends module {
    constructor(m) {
        super(m);
        this.splitTypes = m.el.dataset.splitType.split(",");
        this.initSplitText(m);
    }

    init() { // Init is called automatically
    }

    initSplitText(m) { 
        this.splitText = new SplitText(m.el, {
            type: this.splitTypes.join(","),
            charsClass: "char"
        })
    }
    
    refreshSplitText() {
        this.splitText?.revert().split();
    }
 
    doSomething() {
        console.log('Hello world');
    }

}