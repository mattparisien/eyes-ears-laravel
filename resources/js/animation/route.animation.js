import barba from "@barba/core";
import gsap from "gsap";
import initLoader from "../animation/loader.animation";

const pageTransitionExit = () => {
    const transitionCard = document.getElementById("transition");

    return gsap.to(transitionCard, {
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
    });
};

const pageTransitionEnter = () => {
    const transitionCard = document.getElementById("transition");

    return gsap.to(transitionCard, {
        opacity: 0,
        duration: 0.8,
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

        transitions: [{

            name: "default",

            once(data) {
                //initial animation on page load
                initLoader();
            },

            async leave(data) {
                //animate leaving state
                const done = this.async();
                pageTransitionExit();
                await delay(1500);
                done();
            },

            async enter(data) {
                //animate enter state
                const done = this.async();
                pageTransitionEnter();
                done();
            },
        }],
    });
};

export default initRouteAnimation;
