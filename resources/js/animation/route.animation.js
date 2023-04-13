import barba from "@barba/core";
import gsap from "gsap";
import initLoader from "../animation/loader.animation";
import { toggleLoading } from "../actions";

const exitDelay = 1;

const pageTransitionExit = () => {
    const transitionCard = document.getElementById("transition");

    return gsap.to(transitionCard, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        delay: exitDelay
    });
};

const pageTransitionEnter = () => {
    const transitionCard = document.getElementById("transition");

    return gsap.to(transitionCard, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
    });
};

const delay = (n = 2000) => {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
};

const initRouteAnimation = () => {
    barba.init({
        sync: true,

        transitions: [
            {
                name: "default",

                once() {
                    //initial animation on page load
                    initLoader(toggleLoading);
                },

                async leave() {
                    //animate leaving state

                    const done = this.async();
                    toggleLoading();

                    await pageTransitionExit();
                    await window.scrollTo(0, 0);
                    await delay(1500);
                    done();
                },

                async enter() {
                    //animate enter state
                    const done = this.async();
                    pageTransitionEnter();
                    done();
                    toggleLoading();
                },
            },
        ],
    });
};

export default initRouteAnimation;
