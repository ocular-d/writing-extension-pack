module.exports = {
  title: '(Technical) Writing Extension',
  description: 'Visual Studio Code Extension Pack For Technical Writing',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/ocld-logo.png',
    repo: 'ocular-d/styleguide-editorial',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'VS Code Marketplace', link: 'https://marketplace.visualstudio.com/items?itemName=ocular-d.writing-extension-pack' }
    ],
    sidebar: [
      {
      title: 'Getting Started',
      collapsable: false,
      children: [
        'dependencies',
        'install',
        'extensions'
      ]
      },
      {
        title: 'Extensions',
        collapsable: false,
        children: [
          'word-count',
          'read-time'
        ]
      },
      {
        title: 'About',
        collapsable: false,
        children: [
          'contribute',
          'credits'
        ]
      }
  ]
  },
  plugins: {
    '@vuepress/medium-zoom': true,
    'vuepress-plugin-code-copy': true,
    'vuepress-plugin-reading-time': true,
    '@vuepress/back-to-top': true,
    '@vuepress/nprogress': true
  }

}
