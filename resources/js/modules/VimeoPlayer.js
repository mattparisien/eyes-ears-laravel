import { module } from 'modujs';
import Player from '@vimeo/player';




export default class extends module {

    constructor(m) {

        super(m);
        this.el = m.el;
        this.playBtn = document.querySelector(`[data-lightbox-action='open'][data-lightbox-id=${this.el.dataset.moduleVimeoPlayer}]`);
        this.src = this.el.dataset.src;
        this.rawSrc = this.el.dataset.rawSrc;
    }    

    init() {

    }

    initPlayer() {
        this.vimeoPlayer = new Player(this.el);
    }

    hideToggler() {
        this.playBtn.classList.add("hidden");
    }

    play() {
        this.vimeoPlayer.play();
    }

    showToggler() {
        this.playBtn.classList.remove("hidden");
    }

    showControls() {
        this.el.src = this.el.src.replace('controls=false', 'controls=true')
    }

    onPlay() {
        const el = this.el;
        this.vimeoPlayer.on("play", () => {
            el.classList.remove("opacity-0")
        })
    }

    template() {
        return `
                <div class="lg:!max-w-6xl md:max-w-3xl container mx-auto w-full flex items-center justify-center z-10">
                    <div class="relative overflow-hidden ratio-16:9 rounded-md">
                        <iframe
                        src=${this.rawSrc}&controls=true&muted=0&autoplay=1
                        frameborder="0"
                        allowfullscreen
                        webkitallowfullscreen
                        mozallowfullscreen
                        allow="autoplay; encrypted-media"
                        class="absolute inset-0 w-full h-full border-0"
                        ></iframe>
                    </div>
                </div>
        `;
    }

    load(el) {
       return new Promise((resolve, reject) => {
            el.el.addEventListener("load", () => {
                resolve();
            });

            el.el.src = el.el.dataset.src;

            setTimeout(() => {
                reject();
            }, 4000);
       })
    }

    triggerPlayer({el}) {

        const init              = this.initPlayer.bind(this);
        const play              = this.play.bind(this);
        const onPlay            = this.onPlay.bind(this);

        this.load(el).then(success => {
            init();
            play();
            onPlay();
        })
        .catch(err => console.log('Error loading iframe src: ', err))
       
    }
}