import { module as BaseModule } from 'modujs';
import SplitText from 'gsap/SplitText';
 
export default class extends BaseModule {
    constructor(m) {
        super(m);
        this.splitTypes = m.el.dataset.splitType.split(",");
        this.initSplitText(m);
        this.onResize();
    }

    init() { // Init is called automatically
    }

    initSplitText(m) { 
        this.splitText = new SplitText(m.el, {
            type: this.splitTypes.join(","),
            charsClass: "char",
            linesClass: "line text-center overflow-hidden",
            wordsClass: "word"
        })
    }
    
    refreshSplitText() {
        this.splitText?.revert().split();
    }
 

    onResize() {
        const refresh = this.refreshSplitText.bind(this);
        window.addEventListener("resize", () => {
            refresh();
        })
    }

}