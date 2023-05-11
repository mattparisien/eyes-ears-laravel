import { module } from 'modujs';
import Player from '@vimeo/player';

//This modules takes care of both the vimeo embed player + the native video tag

export default class extends module {

    constructor(m) {

        super(m);
        this.el        = m.el;
        this.id        = m.el.dataset.moduleVideoPlayer;
        this.videoCtx  = m.el.dataset.videoPlayerCtx; //Can be vimeo || native
        this.options   = m.el.dataset.vimeoOptions ? m.el.dataset.videoOptions.split(",") : [];
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

        this.videoPlayer = this.videoCtx == "vimeo" ? new Player(this.el) : this.el;
        this.initOptions();
    }

    hideToggler() {
        this.playBtn.classList.add("hidden");
    }

    play() {
        this.videoPlayer.play();
    }

    showToggler() {
        this.playBtn.classList.remove("hidden");
    }

    showControls() {
        this.el.src = this.el.src.replace('controls=false', 'controls=true')
    }

    setWidth(w) {
        this.width = w;
    }

    setHeight(h) {
        this.height = h;
    }

    onPlay() {
        const el = this.el;
        const ctx = this;

        if (this.videoCtx == "vimeo") {
            this.vimeoPlayer?.on("play", () => {
                ctx.hasPlayed = true;
                el.classList.remove("opacity-0")
            })
        } else if (this.videoCtx == "native") {
            this.videoPlayer.addEventListener("loadeddata", (e) => {


                ctx.setWidth(e.target.videoWidth);
                ctx.setHeight(e.target.videoHeight);

                if (e.target.readyState >= 3) {
                    el.classList.remove("opacity-0");
                }
            })
        }
    }

    template(ctx) {

        if (ctx == "single-vimeo") {
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
        } else if (ctx == "single-video") {
            return `
                <div class="lg:!max-w-6xl md:max-w-3xl container mx-auto w-full flex items-center justify-center z-10">
                    <div class="relative overflow-hidden ratio-16:9 rounded-md">
                        <video
                        src=${this.rawSrc}
                        controls
                        playsinline
                        loop
                        class="absolute inset-0 w-full h-full border-0"
                        ></video>
                    </div>
                </div>
        `;
        }

        
    }



    calculateHeight() {
        const ctx = this;
        let w, h, r;

        if (ctx.videoCtx == "vimeo") {
            Promise.all([this.vimeoPlayer.getVideoWidth(), this.vimeoPlayer.getVideoHeight()]).then(function(dimensions) {
                w = dimensions[0];
                h = dimensions[1];
                r = height / width;
                ctx.el.parentNode.style.setProperty('--ratio-percent', ratio * 100 + "%")
            });
        } else if (ctx.videoCtx == "native") {
            console.log(this.ctx);
        }  
    }

    initOptions() {
        if (!this.options || !this.options.length) return;

        const ctx = this;

        this.options.forEach(option => {
            ctx.call(option, null, "VideoPlayer", this.id);
        })
    }

    load(el, ctx) {
       return new Promise((resolve, reject) => {

            if (ctx == 'vimeo') {
                el.el.addEventListener("load", () => {
                    resolve();
                });
            } else if (ctx == 'native') {
                el.el.addEventListener("loadeddata", () => {
                    resolve();
                })
            } else {
                reject('No valid video context passed as a data attribute');
            }
            
            el.el.src = el.el.dataset.src;

            setTimeout(() => {
                reject('Load timeout');
            }, 4000);
       })
    }

    triggerPlayer({el}) {

        if (this.hasPlayed) return;

        const init              = this.initPlayer.bind(this);
        const play              = this.play.bind(this);
        const onPlay            = this.onPlay.bind(this);

        this.load(el, this.videoCtx).then(success => {
            init();
            play();
            onPlay();
        })
        .catch(err => console.log(`Error in VideoPlayer module (id ${this.id}) load method: `, err))
       
    }
}