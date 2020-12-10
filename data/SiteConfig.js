const config = {
  siteTitle: 'Gustavo Quino',
  siteTitleShort: 'Gustavo Quino',
  siteTitleAlt: 'Gustavo Quino',
  siteLogo: '/logos/logo-48-n.png',
  siteUrl: 'https://www.gquino.com',
  repo: 'https://github.com/gquino/gquino.github.io.git',
// new path prefix to work with the manual procedure
//  pathPrefix:'',
  pathPrefix: 'https://www.gquino.com',
//  pathPrefix: '/gquino.github.io',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Personal website of Dr Gustavo Quino, researcher at the University of Oxford and musician.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-140451144-1',
 // disqusShortname: 'gquino',
 // postDefaultCategoryID: 'Tech',
 // userName: 'Gustavo',
  userEmail: 'me@gquino.com',
  userTwitter: 'quinoqg',
  userLocation: 'Oxford, UK',
 // userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I am a researcher working on the field of solid mechanics.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Research',
      link: '/research/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
