const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./content/**/*.md",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        fontSize: {
            xs: ["12px", "20px"],
            sm: ["14px", "22px"],
            base: ["16px", "26px"],
            lg: ["18px", "28px"],
            xl: ["20px", "30px"],
            "2xl": ["24px", "32px"],
            "3xl": ["28px", "40px"],
            "4xl": ["40px", "54px"],
            "5xl": ["48px", "64px"],
            "6xl": ["72px", "98px"],
        },
        extend: {
            fontFamily: {
                sans: "Walsheim",
            },
            colors: {
                light: "#f9f8f4",
                dark: "#1C1C1C",
                primary: {
                    900: "#f6e544",
                    800: "#516573",
                    100: "#DDE1E4",
                },
                secondary: {
                    900: "#E03752",
                    800: "#E65F75",
                    100: "#FAE0E4",
                },
                info: {
                    900: "#7E60C4",
                    800: "#9880D0",
                    100: "#EBE6F6",
                },
                success: {
                    900: "#259862",
                    800: "#51AD81",
                    100: "#DDEFE6",
                },
                accent: {
                    pink: "#F39F9F",
                    ombre: "#F3E0C6",
                    cyan: "#37ABAF",
                    "cyan-light": "#B7E1E2",
                    green: "#9BD4B0",
                    blue: "#30869F",
                },
                gray: {
                    100: "#F4F5F7",
                    200: "#EEEFF4",
                    300: "#D9DBE1",
                    700: "#969BAB",
                    800: "#474A57",
                    900: "#18191F",
                },
                purple: {
                    900: "#8C30F5",
                    800: "#D6B1FF",
                    100: "#F1E4FF",
                },
                cyan: {
                    900: "#2EC5CE",
                    800: "#75E3EA",
                    700: "#A0DCFF",
                    100: "#D5FAFC",
                },
            },
            height: {
                screen: "calc(var(--vh, 1vh) * 100)"
            },
            minHeight: {
                screen: "calc(var(--vh, 1vh) * 100)"
            },
            boxShadow: {
                nav: "0px 1px 0px #E5E9F2",
                gray: "0px 30px 40px rgba(212, 217, 232, 0.2)",
                dark: "0px 10px 20px rgba(41, 41, 42, 0.07)",
                "grey-lg": "0 2vw 4vw rgba(0, 0, 0, 0.14)",
                
            },
            typography: (theme) => ({
                lg: {
                    css: {
                        color: theme("colors.gray.900"),
                    },
                },
            }),
            transitionTimingFunction: {
                //Power 1
                'power1-in': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
                'power1-out': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                'power1-in-out': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
                
                //Power 2
                'power2-in': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                'power2-out': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                'power2-in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',

                //Power 3
                'power3-in': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
                'power3-out': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
                'power3-in-out': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',

                //Power 4
                'power4-in': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                'power4-out': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
                'power4-in-out': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',

                //Back
                'back-in': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
                'back-out': 'cubic-bezier(0.175, 00.885, 0.320, 1.275)',
                'back-in-out': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',

                //Sine
                'sine-in': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
                'sine-out': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                'sine-in-out': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

                //Circ
                'circ-in': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
                'circ-out': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
                'circ-in-out': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',

                //Misc
                'bounce': 'cubic-bezier(0.17, 0.67, 0.3, 1.33)',
                'slow-out': 'cubic-bezier(.04,1.15,0.4,.99)',
                'smooth': 'cubic-bezier(0.380, 0.005, 0.215, 1)'
            }
        },
    },    
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        // eslint-disable-next-line no-undef
        require("tailwindcss-debug-screens"),
        plugin(function({ addVariant }) {
            addVariant("is-open", ".is-open &");
          })
    ],
};
