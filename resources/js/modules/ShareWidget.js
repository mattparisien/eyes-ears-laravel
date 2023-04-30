import { module } from 'modujs';

export default class extends module {


    constructor(m) {
        super(m);
        this.el = m.el;
        this.links = Array.from(this.el.querySelectorAll("[data-share-type]"));
        this.listen();
    }
    
    init() {



    }

    openLinkedIn() {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`);
    }

    listen() {

        const linkedin = this.openLinkedIn.bind(this);

        const onClick = (shareType) => {
            switch(shareType) {
                case 'linkedin':
                    linkedin();
                    break;
            }
        }

        this.links.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                onClick(e.currentTarget.dataset.shareType);
            })
        })
    }

}