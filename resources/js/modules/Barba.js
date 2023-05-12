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
        const isIntroDisabled   = this.isIntroDisabled;
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
                        if (isIntroDisabled()) {
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
                        await done();
                        await delay(300)
                        enterAnimation();
                        updateModules(context, data.next.container);
                        toggleChangingViews();
                        toggleLoading();

                    },
                },
            ],
        }); 

        // disable automatic page view
        gtag('config', 'G-CBL2X5VKM6', {
            send_page_view: false,
        });
  
        // after each transition, push page_view event to Analytics
        barba.hooks.after(() => {
            gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': location.href,
            'page_path': location.pathname,
            });
        });
    }

    isIntroDisabled() {
        return !document.getElementById("intro") || STATES.IS_INTRO_DISABLED;
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
        
        //Update lightbox
        ctx.call('update', null, 'Lightbox', 'main');

        //Update modules inside new page
        ctx.call('update', newContainer, 'app');

        //Update header
        ctx.call('update', null, 'Header', 'main');
    }

    destroyModules(ctx = this, oldContainer) {
        //Destroy modules that aren't the scroller
        ctx.call('destroy', oldContainer, 'app');

        //Destroy lightbox context and listeners
        ctx.call('destroy', null, 'Lightbox', 'main');  
    }

}