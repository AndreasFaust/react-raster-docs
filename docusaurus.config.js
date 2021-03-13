module.exports = {
  url: 'https://andreasfaust.github.io/',
  baseUrl: '/react-raster-docs/',
  projectName: 'react-raster-docs', // Usually your repo name.
  organizationName: 'andreasfaust', // Usually your GitHub org/user name.
  title: 'react-raster',
  tagline: 'react-raster is an advanced Grid-System, which is highly customizable and ready for server-side-rendering.',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'react-raster',
      logo: {
        alt: 'react-raster Logo',
        src: 'react-raster-logo-reduced.svg',
        srcDark: "react-raster-logo-reduced-white.svg"    
      },
      items: [
        {
          to: 'docs/concept',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://https://github.com/AndreasFaust/react-raster',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Andreas Faust`,
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
