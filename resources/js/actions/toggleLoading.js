import STATES from "./states";
import { html } from "../utils/environment";
import config from "../config";

const toggleLoading = () => {
    STATES.IS_LOADING = !STATES.IS_LOADING;

    if (STATES.IS_LOADING) {
        html.classList.remove(config.CSS_CLASS.LOADED);
        html.classList.remove(config.CSS_CLASS.READY);
        html.classList.add(config.CSS_CLASS.LOADING);
    } else {
        html.classList.add(config.CSS_CLASS.LOADED);
        html.classList.add(config.CSS_CLASS.READY);
        html.classList.remove(config.CSS_CLASS.LOADING);
    }
};

export default toggleLoading;
