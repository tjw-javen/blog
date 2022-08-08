const readFileList = require('../../scripts/build.js')
module.exports = {
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
            text: '书籍',
            items: [{
                text: 'js',
                items: [{
                    text: 'es6',
                    link: '/books/js/es6/'
                }, ]
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
            text: 'node',
            link: '/node/base/01-环境搭建'
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
        '/node/': renderSiderBar()
    }
}


function renderSiderBar() {
    return ([
        // ["/notes/", "首页"],
        {
            title: "基础篇",
            collapsable: false,
            children: readFileList('base')
        },
        {
            title: "内置模块",
            collapsable: true,
            children: readFileList('modules')
        },
        {
            title: "进阶篇",
            collapsable: true,
            children: readFileList('advance')
        },
        {
            title: "Express",
            collapsable: true,
            children: readFileList('express')
        },
        {
            title: "Koa2",
            collapsable: true,
            children: readFileList('koa2')
        },
        {
            title: "其他",
            collapsable: false,
            children: readFileList('other')
        }
    ])
}