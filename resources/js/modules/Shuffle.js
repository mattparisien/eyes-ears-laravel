import gsap from 'gsap';
import { module } from 'modujs';
 
export default class extends module {
    constructor(m) {
        super(m);
        this.el = m.el;

        this.text       = this.el.innerText;
        this.currText   = this.text;

        this.maxNum     =  this.text.match(/\d+/)[0];

        this.animConfig = {
            currNum: 1,
            target: this.maxNum
        }
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

    initFrameAnim() {

        let num = Number(this.animConfig.currNum.toFixed(0)).toLocaleString('en-US');
        this.el.innerText = num;
        this.frame = requestAnimationFrame(this.initFrameAnim.bind(this));
    }

    animate() {
        const ctx = this;

        this.el.innerText = this.el.innerText.replace(this.maxNum, 0);


        gsap.to(this.animConfig, {
            currNum: ctx.animConfig.target,
            ease: 'power3.out',
            duration: 3,
            onComplete: () => {
                cancelAnimationFrame(ctx.frame);        
            }
        })

        this.initFrameAnim();


        // this.timer = setInterval(() => {
            
        //     if (ctx.currNum >= ctx.maxNum) {
        //         clearInterval(ctx.timer);
        //     } else {
        //         this.increment();
        //     this.el.innerText = this.el.innerText.replace(this.prevNum, this.currNum);
        //     this.prevNum = this.currNum;
        //     }
        // }, this.interval);

  
    }

    launch() {
        this.animate();
    }
    

}