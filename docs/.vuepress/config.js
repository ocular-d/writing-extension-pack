module.exports = {
  title: '(Technical) Writing Extension',
  description: 'Visual Studio Code Extension Pack For Technical Writing',
  base: "/",
  markdown: {
    toc: {
      includeLevel: [2]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/ocld-logo.png',
    footer: 'Awesome Tech',
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
          'read-time',
          'elist'
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
