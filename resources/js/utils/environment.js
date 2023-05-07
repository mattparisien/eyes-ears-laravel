const APP_NAME     = 'The Eyes and Ears Agency';
const DATA_API_KEY = '';

const html         = document.documentElement;
const body         = document.body;
const isDebug      = html.hasAttribute('data-debug');
const isPreview    = html.classList.contains("is-preview");



export { APP_NAME, DATA_API_KEY, html, body, isDebug, isPreview };