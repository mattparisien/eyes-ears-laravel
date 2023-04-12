/**
 * Reference:
 *
 * - {@link https://github.com/locomotivemtl/locomotive-boilerplate/blob/master/assets/scripts/config.js}
 */

const env = process.env.APP_ENV;

const config = Object.freeze({
    
    // Environments
    ENV: env,
    IS_PROD: env === "production",
    IS_DEV: env === "local",

    // CSS class names
    CSS_CLASS: {
        LOADING: "is-loading",
        READY: "is-ready",
        LOADED: "is-loaded",
    },
});

export default config;
