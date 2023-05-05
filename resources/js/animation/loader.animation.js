import gsap from "gsap";


const initLoader = (onCompleteCb) => {


    const introContainer = document.getElementById("intro");
    const logo = introContainer.querySelector(".site-intro__logo");
    const words = [...introContainer.querySelectorAll(".word-group")];
    const chars = [...introContainer.querySelectorAll("[data-letter-id]")].sort(
        (a, b) => a.dataset.letterId - b.dataset.letterId
    );

    const { width, height, top } = document
        .getElementById("header-logo")
        .getBoundingClientRect();

    const tl = gsap.timeline();



    //Set intiial postiion of DOM elements to ready them for animation
const setInitialAttrs = () => {
    gsap.set(logo, {
        width,
        height
    })
    gsap.set(chars, {
        y: "400%",
    });
    gsap.set(words, {
        opacity: 0,
    });
};

const removeFromDOM = () => {
    introContainer.remove();
};

const animate = (onCompleteCb) => {
    return tl
        .set(logo, {
            opacity: 1,
        })
        .to(chars, {
            y: 0,
            ease: "power3.inOut",
            stagger: 0.1,
            duration: 2.3,
        })
        .to(
            words,
            {
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
            },
            1.8
        )
        .to(logo, {
            y: -(
                window.innerHeight / 2 -
                (logo.getBoundingClientRect().height / 2) - top
            ),
            duration: 2,
            ease: "power3.inOut",
            onComplete: () => {
                removeFromDOM();
                onCompleteCb();
            },
        }, 2);
};

    setInitialAttrs();
    animate(onCompleteCb);
};

export default initLoader;
