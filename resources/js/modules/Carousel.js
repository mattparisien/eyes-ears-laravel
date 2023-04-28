import { module } from 'modujs';
import Swiper, {Navigation, Autoplay} from "swiper";
import 'swiper/css';

export default class extends module {


    constructor(m) {
        super(m);

        const {autoplay, slidesPerView} = m.el.dataset;

        this.slidesPerView  = slidesPerView;
        this.el             = m.el;

        if (autoplay == 1) {
            this.autoplay = {
                delay: 5000,
                disableOnInteraction: false,
            }
        } else {
            this.autoplay = false;
        }

        if (!this.el.hasAttribute("data-init-disabled")) {
            this.createSwiper();
        }


    }

    createSwiper() {


        this.swiper = new Swiper(this.el.querySelector(".swiper"), {
            modules: [Navigation, Autoplay],
            speed: 400,
            spaceBetween: 20,
            loop: true,
            autoplay: this.autoplay,
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
        });

        
    }
    

    init() {

    }

    loadItems() {
        
    }

    template(items, onCreate) {

            items.forEach(item => {

                const slide = document.createElement("div");
                const figure = document.createElement("figure");

                slide.classList.add("swiper-slide");
                figure.classList.add('overflow-hidden', 'w-full', 'h-full', 'relative', 'rounded-md', 'bg-primary-900');
                
                figure.appendChild(item);
                slide.appendChild(figure);

                onCreate(slide);
            });
    }
}