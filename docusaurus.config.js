// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pixly',
  tagline: 'Pixly is a complete game development oriented pixel art and animation editor for Android devices.',
  url: 'https://pixly.tavomaciel.com/',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tavomaciel',
  projectName: 'pixly-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tavomaciel/pixly/edit/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          path: "changelog",
          blogTitle: "Changelog",
          blogDescription: "Changelog",
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent updates',
          routeBasePath: "changelog",
          tagsBasePath: "tags",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom', 'json'],
            title: "Pixly Changelog",
            description: "Pixly Changelog",

          }
        },
        gtag: { trackingID: "G-J78NM9KLMG" },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        versionPersistence: "none"
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      hideableSidebar: false,
      metadata: [
        {name: 'author', content: 'Gustavo Maciel'},
        {name: 'theme-color', content: '#333333'},
        {name: 'google-site-verification', content: 'xM5PCycxAjnZGBEtzw_NU0JpUIGOTGLqeSC66yer0tw'}
      ],
      navbar: {
        hideOnScroll: true,
        style: 'dark',
        title: 'Pixly',
        logo: {
          alt: 'Pixly logo',
          src: 'img/32.png',
        },
        items: [
          {
            label: "Download",
            to: 'download'
          },
          {
            type: 'doc',
            docId: 'index',
            label: 'Guide',
          },
          {
            to: 'changelog',
            label: 'Changelog',
          },
          {
            href: 'https://trello.com/b/271M0NG9/pixly-todo',
            label: "Roadmap",
          },
          {
            href: 'https://github.com/tavomaciel/pixly-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.meltinglogic.pixly&utm_source=website&utm_campaign=footer'
              },
              {
                label: 'Email me',
                href: 'mailto:gus@tavomaciel.com',
              },
              // {
              //   label: 'Discord',
              //   href: '?',
              // },
              {
                label: 'Follow me on Twitter',
                href: 'https://twitter.com/gtoknu',
              },
              {
                label: "Other projects",
                href: "http://meltinglogic.com"
              }
            ],
          },
        ],
        copyright: `Made with dedication by <a href="https://twitter.com/gtoknu">Gustavo Maciel</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
