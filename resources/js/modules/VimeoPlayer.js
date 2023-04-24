import { module } from 'modujs';
import Player from '@vimeo/player';




export default class extends module {

    constructor(m) {

        super(m);
        this.el = m.el;
        this.playBtn = document.querySelector(`[data-video-toggler-id='${this.el.dataset.moduleVimeoPlayer}']`);
        

    }    

    init() {

    }

    initPlayer() {
        this.vimeoPlayer = new Player(this.el);
        this.onPlay();
    }

    onPlay() {
        this.vimeoPlayer.on('play', () => {
            this.playBtn.classList.add("hidden");
        })
    }



    listenForPlayClick() {
        console.log(this.vimeoPlayer);
        this.playBtn.addEventListener("click", this.vimeoPlayer.play);
    }

    load({el}) {
        el.el.src = el.el.dataset.src;
        this.initPlayer();
        this.listenForPlayClick();
    }
}