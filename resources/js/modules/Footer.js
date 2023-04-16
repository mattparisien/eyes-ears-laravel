import { module } from 'modujs';

export default class extends module {


    constructor(m) {
        super(m);
        this.el = m.el;
    }
    

    init() {
    }

    animateContent(obj) {
        obj.el.style.transform = `translate3d(0px, -${this.currPos}px, 0px)`;

        this.currPos -= (obj.progress * 10).toFixed(2);
    }

    revealContent(way, obj) {
        if (!this.height) this.setHeight();
        this.currPos = this.height / 2;
        this.dist = this.height;

        const fn = way == "enter" ? 'setScrollCallback' : 'clearScrollCallbacks';
        const arg = way == "enter" ? () => this.animateContent(obj) : null;

        this.call(fn, arg, "Scroll", "main")

    }

    animateCircle({el, progress}) {
            if (!this.circleHeight) this.circleHeight = el.getBoundingClientRect().height;
            el.style.height = this.circleHeight - progress * 100 + "px";  
    }

    initCircleAnim(way, obj) {
        const fn = way == "enter" ? 'setScrollCallback' : 'clearScrollCallbacks';
        const arg = way == "enter" ? () => this.animateCircle(obj) : null;
        this.call(fn, arg, "Scroll", "main")
    }

    setHeight() {
        this.height = this.el.getBoundingClientRect().height;
    }

}