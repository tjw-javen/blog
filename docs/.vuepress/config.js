module.exports = {
    title: 'tanjiawen',
    description: 'Just do it',
    base: '/blog/',
    head: [
      ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    themeConfig: {
      logo: '/logo.jpg',
      nav: [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/' },
        {
          text:'书籍',
          items:[
            {
              text:'js',
              items:[
                {
                  text:'基础',
                  link:'/books/a/'
                },
                {
                  text:'基础1',
                  link:'/books/b/'
                },
              ]
            }
          ]
        },
        { text: 'API', link: '/api/' },
        { text: 'Github', link: 'https://github.com/tjw-javen/blog' },
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