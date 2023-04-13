import STATES from "./states";
import { html } from "../utils/environment";
import config from "../config";

const toggleChangingViews = () => {
    STATES.IS_CHANGING_VIEWS = !STATES.IS_CHANGING_VIEWS;

    if (STATES.IS_CHANGING_VIEWS) {
        html.classList.add(config.CSS_CLASS.CHANGING_VIEWS);
    } else {
        html.classList.remove(config.CSS_CLASS.CHANGING_VIEWS);
    }
};

export default toggleChangingViews;
