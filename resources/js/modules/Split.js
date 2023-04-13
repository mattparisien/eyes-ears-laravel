import { module } from 'modujs';
import SplitText from 'gsap/SplitText';
 
export default class extends module {
    constructor(m) {
        super(m);

        this.splitTypes = m.el.dataset.splitType.split(",");
        this.initSplitText(m);
        
 
        // this.events = {
        //     click: {
        //         button: 'doSomething'
        //     }
        // }
    }

    init() { // Init is called automatically
        console.log('has init!')
    }

    initSplitText(m) { 
        this.splitText = new SplitText(m.el, {
            type: this.splitTypes.join(","),
            charsClass: "char"
        })
    }
 
 
    doSomething() {
        console.log('Hello world');
    }
}