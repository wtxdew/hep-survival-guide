// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HEP Survival Guide",
  tagline: "HEP is an adventure that is best navigated thoughtfully.",
  favicon: "img/favicon.ico",
  url: "https://hep1.phys.ntu.edu.tw",
  baseUrl: "/~tong/survival/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wtxdew", // Usually your GitHub org/user name.
  projectName: "hep-guide", // Usually your repo name.
  deploymentBranch: "pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  noIndex: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-TW"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          path: "docs",
          editUrl: "https://github.com/wtxdew/hep-guide/edit/master/",
          sidebarPath: "./sidebars.js",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/wtxdew/hep-guide/edit/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
    remarkRehypeOptions: {
      footnoteLabel: "Footnotes",
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: ["@docusaurus/theme-live-codeblock"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // mermaid: {
      //   // theme: { light: "neutral", dark: "forest" },
      // },
      metadata: [
        { name: "keywords", content: "HEP, HSG" },
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      image: "img/social-card.png",
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      navbar: {
        title: "HEP Survival Guide",
        logo: {
          alt: "HEP CSG Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Survival Guide",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/wtxdew",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Computer Survival Guide",
                to: "/docs/CSG",
              },
              {
                label: "Blogs",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Contact",
                href: "mailto:tong@hep1.phys.ntu.edu.tw",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/wtxdew",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HEP Survival Guide. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash"],
      },

      announcementBar: {
        id: "support_us",
        content:
          '<b>We are calling for contributions to the <a target="_blank" href="https://hep1.phys.ntu.edu.tw/~tong/survival/contributing">HEP Survival Guide</a>! 🚀</b>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
    }),
};

export default config;
