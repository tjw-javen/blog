module.exports = {
  title: 'tanjiawen',
  description: 'Just do it',
  base: '/blog/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/icon.png'
    }]
  ],
  themeConfig: {
    logo: '/logo.jpg',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '书籍1',
        items: [{
          text: 'js',
          items: [{
              text: 'es6',
              link: '/books/js/es6/'
            },
            {
              text: '基础1',
              link: '/books/b/'
            },
          ]
        }]
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'Git',
        link: '/git/'
      },
      {
        text: 'Typescript',
        items: [{
            text: '基础',
            link: '/typescript/base'
          },
          {
            text: '高级api',
            link: '/typescript/challenge'
          },
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/tjw-javen/blog'
      },
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
      // '/changelog/': ['']
    }
  }
}