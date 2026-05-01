// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Authoring',
      collapsed: false,
      items: [
        'authoring-guide',
        'slide-types',
        'directives',
        'audience-pattern',
      ],
    },
    {
      type: 'category',
      label: 'Themes & Brand',
      collapsed: false,
      items: [
        'themes',
      ],
    },
    {
      type: 'category',
      label: 'Recording',
      collapsed: false,
      items: [
        'presenter-mode',
      ],
    },
  ],
};

export default sidebars;
