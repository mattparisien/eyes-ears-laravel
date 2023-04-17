import { module } from 'modujs';
import Swiper from "swiper";
import "swiper/css";

export default class extends module {


    constructor(m) {
        super(m);

        this.slidesPerView = m.el.dataset.slidesPerView;

        this.swiper = new Swiper(m.el.querySelector(".swiper"), {
            speed: 400,
            spaceBetween: 20,
            loopedSlides: true,
            breakpoints: {
                1024: {
                    slidesPerView: this.slidesPerView
                },
                768: {
                    slidesPerView: this.slidesPerView - 1 < 1 ? 1 : this.slidesPerView - 1
                },
                640: {
                    slidesPerView: this.slidesPerView - 2 < 1 ? 1 : this.slidesPerView - 2
                }
            }
          });;

    }
    

    init() {

    }


}