module.exports = {
    logo: '/logo.jpg',
    nav: require('./nav'),
    sidebar: require('./sideBar'),
    // sidebar: 'auto',
    // 标题深度，2 表示提取 h2 和 h3 标题
    sidebarDepth: 2,
    // 启用页面滚动效果
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
}