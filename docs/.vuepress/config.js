module.exports = {
  title: 'VS Code - (Technical) Writing Extension',
  description: 'Visual Studio Code Extension Pack For Technical Writing',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  nav: [
    { text: 'External', link: 'https://google.com' }
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/ocld-logo.png',
    repo: 'ocular-d/styleguide-editorial',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    sidebar: [
      {
      title: 'Guide',
      collapsable: false,
      children: [
        'dependencies',
        'extensions',
        'install',
        'contribute',
        'credits'
      ]
      },
      {
        title: 'Extensions',
        collapsable: false,
        children: [
          'dependencies',
          'extensions',
          'install',
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
