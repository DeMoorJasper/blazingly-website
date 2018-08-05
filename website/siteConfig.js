const siteConfig = {
  title: 'Blazingly',
  tagline: 'A blazing fast server side rendering & project optimiser cli tool using Parcel',
  url: 'https://blazingly.io',
  baseUrl: '/',
  projectName: 'blazingly-site',
  organizationName: 'Blazingly.io',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright:
    'Copyright © 2018-current  Blazingly.io',
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;
