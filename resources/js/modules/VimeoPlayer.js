import { module } from 'modujs';
import Player from '@vimeo/player';




export default class extends module {

    constructor(m) {

        super(m);
        this.el = m.el;
        this.playBtn = document.querySelector(`[data-video-toggler-id='${this.el.dataset.moduleVimeoPlayer}']`);
        this.overlay = document.querySelector('data-video-overlay-id')
        

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

    }



    listenForPlayClick() {
        const player = this.vimeoPlayer;
        const hideToggler = this.hideToggler.bind(this);

        this.playBtn.addEventListener("click", () => {
            player.play();
            hideToggler();
        });
    }

    load(el) {
        console.log(el);
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

        const init = this.initPlayer.bind(this);
        const play = this.play.bind(this);
        const onPlay = this.listenForPlayClick.bind(this);

        this.load(el).then(success => {
            init();
            play();
            onPlay();
        })
        .catch(err => console.log('Error loading iframe src: ', err))
       
    }
}