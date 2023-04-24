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
        this.onPlay();
    }

    hideToggler() {

        this.playBtn.classList.remove("hidden");
    }

    showToggler() {
        this.playBtn.classList.add("hidden");
    }

    showControls() {
        this.el.src = this.el.src.replace('controls=false', 'controls=true')
    }

    onPlay() {

        const showControls = this.showControls.bind(this);

        this.vimeoPlayer.on('play', () => {
            showControls();
        })
    }



    listenForPlayClick() {
        const player = this.vimeoPlayer;
        const hideToggler = this.hideToggler.bind(this);


        this.playBtn.addEventListener("click", () => {
            player.play();
            hideToggler();
        });
    }

    load({el}) {
        el.el.src = el.el.dataset.src;
        this.initPlayer();
        this.listenForPlayClick();
    }
}