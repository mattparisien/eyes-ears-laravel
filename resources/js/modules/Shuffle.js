import { module } from 'modujs';
import SplitText from 'gsap/SplitText';
import { set } from 'lodash';
 
export default class extends module {
    constructor(m) {
        super(m);
        this.el = m.el;

        this.text       = this.el.innerText;
        this.currText   = this.text;

        this.maxNum     =  this.text.match(/\d+/)[0];
        this.startNum   =  0;
        this.prevNum    =  this.startNum;
        this.currNum    =  this.startNum;
        
        this.interval = 3 * this.maxNum.length;

        this.timeOut = 1000;
    }

    init() { // Init is called automatically
    }

    shuffle() {
        const t = this.text.split("");
        const l = t.length;

        for (let i = l - 1; i > 0; i--) {
            const j   = Math.floor(Math.random() * (i + 1));
            const tmp = t[i];
            t[i] = t[j];
            t[j] = tmp;
        };

        return t.join("");
    }

    increment() {
        return this.currNum++;
    }

    updateText() {
        this.currText = this.currText.replace(this.currNum, this.increment())
    }

    animate() {
        const ctx = this;
        this.el.innerText = this.el.innerText.replace(this.maxNum, 0);

        this.timer = setInterval(() => {
            
            if (ctx.currNum >= ctx.maxNum) {
                clearInterval(ctx.timer);
            } else {
                this.increment();
            this.el.innerText = this.el.innerText.replace(this.prevNum, this.currNum);
            this.prevNum = this.currNum;
            }
        }, this.interval);

  
    }

    launch() {
        this.animate();
    }
    

}