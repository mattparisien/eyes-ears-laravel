import { module } from 'modujs';
import barba from "@barba/core";
import gsap from "gsap";
import initLoader from "../animation/loader.animation";
import { toggleLoading, toggleChangingViews } from "../actions";
import STATES from '../actions/states';
import config from '../config';
import {html} from "../utils/environment";
 
export default class extends module {

    constructor(m) {
        super(m);
        const enterAnimation    = this.pageTransitionEnter;
        const exitAnimation     = this.pageTransitionExit;
        const delay             = this.delay;
        const destroyModules    = this.destroyModules;
        const updateModules     = this.updateModules;
        const context           = this;
        
        this.barbaInstance = barba.init({
            sync: true,
            transitions: [
                {
                    name: "default",
    
                    once() {
                        //initial animation on page load
                        if (STATES.IS_INTRO_DISABLED) {
                            html.classList.add(config.CSS_CLASS.INTRO_DISABLED);
                            toggleLoading();
                            return;
                        }

                        initLoader(toggleLoading);
                    },
    
                    async leave(data) {
                        //animate leaving state
                        data.current.container.classList.add("is-old");
                        
                        const done = this.async();
                        toggleChangingViews();
                        toggleLoading();
                        
    
                        await exitAnimation();
                        await destroyModules(context, data.current.container);
                        await window.scrollTo(0, 0);
                        // await delay(1500);
                        done();
                    },
    
                    async enter(data) {
                    
                        //animate enter state
                        const done = this.async();
                        updateModules(context, data.next.container);
                        enterAnimation();
                        await done();
                        await delay(300)
                        toggleChangingViews();
                        delay(900);
                        toggleLoading();

                    },
                },
            ],
        });
    }
    
    pageTransitionExit()  {
        const transitionCard = document.getElementById("transition");

        return gsap.to(transitionCard, {
            opacity: 1,
            duration: 0.5,
            ease: "power3.inOut",
            delay: 1
        });
    };

    pageTransitionEnter(onCompleteCb)  {
        const transitionCard = document.getElementById("transition");

        return gsap.to(transitionCard, {
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            onComplete: onCompleteCb?.()
        });
    };

    delay(n = 2000)  {
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, n);
        });
    };

    updateModules(ctx = this, newContainer) {
        console.log(ctx, 'the context')
        ctx.call('update', newContainer, 'app')
    }

    destroyModules(ctx = this, oldContainer) {
        ctx.call('destroy', document.body, 'app');
    }

}