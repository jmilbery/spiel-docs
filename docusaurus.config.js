// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spiel',
  tagline: 'A markdown-driven slide engine for solo video creators.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://jmilbery.github.io',
  baseUrl: '/spiel-docs/',

  organizationName: 'jmilbery',
  projectName: 'spiel-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',

      navbar: {
        title: 'Spiel',
        logo: {
          alt: 'Spiel — corgi.software',
          src: 'img/logo.svg',
          style: { borderRadius: '6px' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            href: 'https://github.com/jmilbery/spiel',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://corgi.software',
            label: 'corgi.software',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              { label: 'Getting Started', to: '/getting-started' },
              { label: 'Authoring Guide', to: '/authoring-guide' },
              { label: 'Slide Types', to: '/slide-types' },
              { label: 'Directives', to: '/directives' },
            ],
          },
          {
            title: 'Reference',
            items: [
              { label: 'Themes', to: '/themes' },
              { label: 'Audience Pattern', to: '/audience-pattern' },
              { label: 'Presenter Mode', to: '/presenter-mode' },
            ],
          },
          {
            title: 'Project',
            items: [
              { label: 'GitHub', href: 'https://github.com/jmilbery/spiel' },
              { label: 'corgi.software', href: 'https://corgi.software' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} corgi.software. Built with Spiel.`,
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
