import { module } from 'modujs';
import $ from "jquery";
 
export default class extends module {
    constructor(m) {
        super(m);
        this.el = m.el;
        this.btn = this.el.querySelector("[data-collapsable-button]");
        this.collapsableItem = this.el.querySelector("[data-collapsable-item]");

        this.isCollapsed = true;
        this.onClick();
    }

    init() {
        
    }

    show() {
        this.collapsableItem.style.maxHeight = "100%"
    }

    hide() {
        this.collapsableItem.style.maxHeight = null;
    }

    onClick() {
        const ctx = this;
        this.btn.addEventListener("click", () => {
            ctx.isCollapsed = !ctx.isCollapsed;
            
            if (!ctx.isCollapsed) {
                ctx.show();
            } else {
                ctx.hide();
            }
        })
    }
    

 
}