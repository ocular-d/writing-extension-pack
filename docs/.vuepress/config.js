module.exports = {
  title: '(Technical) Writing',
  description: 'Visual Studio Code Extension Pack For Technical Writing',
  base: "/styleguide-editorial/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  nav: [
    { text: 'GitHub', link: 'https://github.com/ocular-d/writing-extension-pack' }
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/ocld-logo.png',
    repo: 'ocular-d/styleguide-editorial',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    sidebar: [{
      title: 'Guide',
      collapsable: false,
      children: [
        'dependencies',
        'contribute',
        'credits'
      ]
    }
  ]
  }
}
