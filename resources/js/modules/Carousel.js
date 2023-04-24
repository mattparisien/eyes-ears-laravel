import { module } from 'modujs';
import Swiper, {Navigation} from "swiper";
import 'swiper/css';

export default class extends module {


    constructor(m) {
        super(m);

        this.slidesPerView = m.el.dataset.slidesPerView;

        this.swiper = new Swiper(m.el.querySelector(".swiper"), {
            modules: [Navigation],
            speed: 400,
            spaceBetween: 20,
            loop: true,
            direction: 'horizontal',
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                1024: {
                    slidesPerView: this.slidesPerView
                },
                768: {
                    spaceBetween: 10,
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

    loadItems() {
        
    }

}