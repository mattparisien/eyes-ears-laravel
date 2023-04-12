import gsap from "gsap";

const introContainer = document.getElementById("intro");
const logo = introContainer.querySelector(".site-intro__logo");
const chars = [...introContainer.querySelectorAll("[data-letter-id]")].sort(
    (a, b) => a.dataset.letterId - b.dataset.letterId
);
const words = [...introContainer.querySelectorAll(".word-group")];
const headerLogoWidth = document.getElementById("header-logo").getBoundingClientRect().width;
const tl = gsap.timeline();

//Set intiial postiion of DOM elements to ready them for animation
const setInitialAttrs = () => {
    gsap.set(chars, {
        y: "400%",
    });
    gsap.set(words, {
        opacity: 0,
    });
};

const onFinish = () => {
    introContainer.remove();
}

const animate = () => {
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
                logo.getBoundingClientRect().height / 2
            ),
            duration: 2,
            width: headerLogoWidth,
            ease: 'power3.inOut',
            onComplete: onFinish
        });
};

setInitialAttrs();
animate();
