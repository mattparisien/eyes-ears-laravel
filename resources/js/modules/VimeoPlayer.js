import { module } from 'modujs';
import Player from '@vimeo/player';




export default class extends module {

    constructor(m) {

        super(m);
        this.el = m.el;
        this.id = m.el.dataset.moduleVimeoPlayer;
        this.options = m.el.dataset.vimeoOptions ? m.el.dataset.vimeoOptions.split(",") : [];
        this.hasPlayed = false;

        if (this.id !== "hero-video") {
            this.playBtn = document.querySelector(`[data-lightbox-action='open'][data-lightbox-id=${this.el.dataset.moduleVimeoPlayer}]`);
            this.src = this.el.dataset.src;
            this.rawSrc = this.el.dataset.rawSrc;
        }
        
    }    

    init() {

    }

    initPlayer() {
        this.vimeoPlayer = new Player(this.el);
        this.initOptions();
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
        const ctx = this;
        this.vimeoPlayer.on("play", () => {
            ctx.hasPlayed = true;
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

    calculateHeight() {
        const ctx = this;
        Promise.all([this.vimeoPlayer.getVideoWidth(), this.vimeoPlayer.getVideoHeight()]).then(function(dimensions) {
            var width = dimensions[0];
            var height = dimensions[1];
            const ratio = height / width;
            
            ctx.el.parentNode.style.setProperty('--ratio-percent', ratio * 100 + "%")
        });
    }

    initOptions() {
        if (!this.options || !this.options.length) return;

        const ctx = this;

        this.options.forEach(option => {
            ctx.call(option, null, "VimeoPlayer", this.id);
        })
    }

    load(el) {
        const ctx = this;
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

        if (this.hasPlayed) return;

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