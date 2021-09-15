const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Home Cluster",
    tagline: "Kyle Pfromer's home cluster.",
    url: "https://kpfromer.github.io",
    baseUrl: "/home-cluster/",
    projectName: "home-cluster",
    organizationName: "kpfromer",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Home Cluster",
          logo: {
            alt: "Docusaurus Dino",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "services",
              position: "left",
              label: "Docs",
            },
            {
              href: "https://github.com/kpfromer/home-cluster",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Links",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/kpfromer/home-cluster",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Kyle Pfromer. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
