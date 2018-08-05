const siteConfig = {
  title: 'Blazingly',
  tagline: 'A blazing fast server side rendering & project optimiser cli tool using Parcel',
  url: 'https://blazingly.io',
  baseUrl: '/',
  projectName: 'blazingly-site',
  organizationName: 'Blazingly.io',
  headerLinks: [
    {
      doc: 'doc1',
      label: 'Docs'
    },
    {
      blog: true,
      label: 'Blog'
    },
  ],
  headerIcon: 'img/blazingly.png',
  colors: {
    primaryColor: '#ffffff',
    secondaryColor: '#E78734',
  },
  copyright: 'Copyright © 2018-current Blazingly.io',
  highlight: {
    theme: 'default',
  },
  separateCss: ['static/css/main'],
  onPageNav: 'separate',
  ogImage: 'img/blazingly.png',
  twitterImage: 'img/blazingly.png',
};

module.exports = siteConfig;
