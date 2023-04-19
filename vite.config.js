import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [laravel([
        "resources/assets/sass/index.scss",
        "resources/css/tailwind.css",
        "resources/js/site.js"])],
});
