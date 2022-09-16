const readFileList = require('../../scripts/build.js')
module.exports = {
    '/api/': [
        'queue',
        'stack',
        'day',
    ],
    '/node/': renderNodeSiderBar(),
    '/other/': renderOtherSiderBar()

}

function renderNodeSiderBar() {
    const parentName = 'node'
    return ([
        // ["/notes/", "首页"],
        {
            title: "基础篇",
            collapsable: false,
            children: readFileList(parentName, 'base')
        },
        {
            title: "内置模块",
            collapsable: true,
            children: readFileList(parentName, 'modules')
        },
        {
            title: "进阶篇",
            collapsable: true,
            children: readFileList(parentName, 'advance')
        },
        {
            title: "Express",
            collapsable: true,
            children: readFileList(parentName, 'express')
        },
        {
            title: "Koa2",
            collapsable: true,
            children: readFileList(parentName, 'koa2')
        },
        {
            title: "Nest",
            collapsable: true,
            children: readFileList(parentName, 'nest')
        },
        {
            title: "其他",
            collapsable: false,
            children: readFileList(parentName, 'other')
        }
    ])
}

function renderOtherSiderBar() {
    const parentName = 'other'
    return ([{
            title: "深入浅出 Vue3",
            collapsable: true,
            children: readFileList(parentName, 'resource-analysis')
        },
        {
            title: "Vue3 plain",
            collapsable: true,
            children: readFileList(parentName, 'vue3-plain')
        },
        {
            title: "浏览器",
            collapsable: true,
            children: readFileList(parentName, 'browser')
        },
        {
            title: "算法基础",
            collapsable: true,
            children: readFileList(parentName, 'algorithm')
        },
        {
            title: "前端基础",
            collapsable: true,
            children: readFileList(parentName, 'base')
        },
        {
            title: "书籍",
            collapsable: true,
            children: readFileList(parentName, 'book')
        },
        {
            title: "javascript",
            collapsable: true,
            children: readFileList(parentName, 'javascript')
        },
        {
            title: "react",
            collapsable: true,
            children: readFileList(parentName, 'react')
        },
        {
            title: "node",
            collapsable: true,
            children: readFileList(parentName, 'node')
        },
        {
            title: "node-study",
            collapsable: true,
            children: readFileList(parentName, 'node-study')
        },
        {
            title: "other",
            collapsable: true,
            children: readFileList(parentName, 'other')
        },
        {
            title: "css",
            collapsable: true,
            children: readFileList(parentName, 'css')
        },
        {
            title: "rxjs",
            collapsable: true,
            children: readFileList(parentName, 'rxjs')
        },
    ])
}