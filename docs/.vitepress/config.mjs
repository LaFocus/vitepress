import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
    title: "Beepul Business API",
    description: "Beepul Business | Partner API",
    // base: '/v1.0/short-review.html',
    themeConfig: {
        nav: [
            {
                text: "Versions",
                items: [
                    { text: "1.0", link: "/old-versions/v1.0/short-review" },
                    { text: "1.1", link: "/short-review" },
                ],
            },
        ],

        sidebar: [
            {
                text: "Review",
                items: [
                    { text: "Краткий обзор", link: "./short-review" },
                    { text: "Обработка ошибок", link: "./error-processing" },
                    { text: "Модель данных", link: "./data-model" },
                    { text: "API", link: "./api" },
                ],
            },
        ],
        extend: "@vuepress/theme-default",
    },
    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container
    },
});
