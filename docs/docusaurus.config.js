const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "electronbb-docs",
    tagline: "ElectronBB documentation",
    url: "https://nadwey.github.io/",
    baseUrl: "/ElectronBB/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    organizationName: "Nadwey",
    projectName: "electronbb",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
            },
        ],
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: {
                    showReadingTime: true,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "ElectronBB docs",
                items: [
                    {
                        type: "doc",
                        docId: "Intro",
                        position: "left",
                        label: "Docs",
                    },
                    // { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/Nadwey/ElectronBB",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
