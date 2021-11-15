module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base:'/blog/',
    themeConfig: {
        // logo: '/logo.png',
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Github', link: 'https://github.com/tanjiawen709398936/blog.git' },
        ],
        sidebar: {
          '/guide/': [
            '',
          ],
          '/api/': [
              'queue',
              'stack',
              'day',
          ],
        //   '/changelog/': ['']
        }
      }
  }