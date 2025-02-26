(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{483:function(a,t,s){"use strict";s.r(t);var n=s(54),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"问题-将图片转成datauri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-将图片转成datauri"}},[a._v("#")]),a._v(" 问题：将图片转成datauri")]),a._v(" "),s("p",[a._v("今天，在QQ群有个群友问了个问题：“nodejs读取图片，转成base64，怎么读取呢？” 想了一下，他想问的应该是 怎么样把图片嵌入到网页中去，即如何把图片转成对应的 datauri。")]),a._v(" "),s("p",[a._v("是个不错的问题，而且也是个很常用的功能。快速实现了个简单的demo，这里顺便记录一下。")]),a._v(" "),s("h2",{attrs:{id:"实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[a._v("#")]),a._v(" 实现思路")]),a._v(" "),s("p",[a._v("思路很直观：1、读取图片二进制数据 -> 2、转成base64字符串 -> 3、转成datauri。")]),a._v(" "),s("p",[a._v("关于base64的介绍，可以参考阮一峰老师的"),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2008/06/base64.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("文章"),s("OutboundLink")],1),a._v("。而 datauri 的格式如下")]),a._v(" "),s("blockquote",[s("p",[a._v("data:["),s("mediatype",[a._v("][;base64],"),s("data")])],1)]),a._v(" "),s("p",[a._v("具体到png图片，大概如下，其中 “xxx” 就是前面的base64字符串了。接下来，我们看下在nodejs里该如何实现")]),a._v(" "),s("blockquote",[s("p",[a._v("data: image/png;base64, xxx")])]),a._v(" "),s("h2",{attrs:{id:"具体实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[a._v("#")]),a._v(" 具体实现")]),a._v(" "),s("p",[a._v("首先，读取本地图片二进制数据。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" filepath "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./1.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" bData "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("filepath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("然后，将二进制数据转换成base64编码的字符串。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" base64Str "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" bData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'base64'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("最后，转换成datauri的格式。")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" datauri "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'data:image/png;base64,'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" base64Str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("完整例子代码如下，代码非常少：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" filepath "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./1.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" bData "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("filepath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" base64Str "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" bData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'base64'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" datauri "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'data:image/png;base64,'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" base64Str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("datauri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[a._v("#")]),a._v(" 相关链接")]),a._v(" "),s("p",[a._v("Base64笔记：http://www.ruanyifeng.com/blog/2008/06/base64.html\nData URIs：https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs")])])}),[],!1,null,null,null);t.default=r.exports}}]);