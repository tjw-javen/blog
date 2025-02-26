(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{409:function(s,t,a){s.exports=a.p+"assets/img/session-result-01.57116136.png"},410:function(s,t,a){s.exports=a.p+"assets/img/session-result-03.01a0ccd1.png"},411:function(s,t,a){s.exports=a.p+"assets/img/session-result-02.16f1ad16.png"},517:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"koa2实现session"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#koa2实现session"}},[s._v("#")]),s._v(" koa2实现session")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("koa2原生功能只提供了cookie的操作，但是没有提供session操作。session就只用自己实现或者通过第三方中间件实现。在koa2中实现session的方案有一下几种")]),s._v(" "),n("ul",[n("li",[s._v("如果session数据量很小，可以直接存在内存中")]),s._v(" "),n("li",[s._v("如果session数据量很大，则需要存储介质存放session数据")])]),s._v(" "),n("h2",{attrs:{id:"数据库存储方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据库存储方案"}},[s._v("#")]),s._v(" 数据库存储方案")]),s._v(" "),n("ul",[n("li",[s._v("将session存放在MySQL数据库中")]),s._v(" "),n("li",[s._v("需要用到中间件\n"),n("ul",[n("li",[s._v("koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。")]),s._v(" "),n("li",[s._v("koa-mysql-session 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。")]),s._v(" "),n("li",[s._v("将sessionId和对应的数据存到数据库")])])]),s._v(" "),n("li",[s._v("将数据库的存储的sessionId存到页面的cookie中")]),s._v(" "),n("li",[s._v("根据cookie的sessionId去获取对于的session信息")])]),s._v(" "),n("h2",{attrs:{id:"快速使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[s._v("#")]),s._v(" 快速使用")]),s._v(" "),n("p",[s._v("demo源码")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/poetries/daily-code-practice/tree/master/node/koa/koa2-demo/blob/master/demo/session/index.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/poetries/daily-code-practice/tree/master/node/koa/koa2-demo/blob/master/demo/session/index.js"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"例子代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子代码"}},[s._v("#")]),s._v(" 例子代码")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Koa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" session "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa-session-minimal'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MysqlSession "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa-mysql-session'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Koa")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置存储session信息的mysql")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" store "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MysqlSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc123'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  database"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa_demo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存放sessionId的cookie配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  maxAge"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cookie有效时长")]),s._v("\n  expires"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cookie失效时间")]),s._v("\n  path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 写cookie所在的路径")]),s._v("\n  domain"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 写cookie所在的域名")]),s._v("\n  httpOnly"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否只用于http请求中获取")]),s._v("\n  overwrite"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否允许重写")]),s._v("\n  secure"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sameSite"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  signed"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用session中间件")]),s._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("session")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SESSION_ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  store"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  cookie"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" cookie\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置session")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/set'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      user_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("random")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("substr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      count"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取session信息")]),s._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[demo] session is starting at port 3000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),n("h3",{attrs:{id:"运行例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行例子"}},[s._v("#")]),s._v(" 运行例子")]),s._v(" "),n("h4",{attrs:{id:"执行命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("node index.js\n")])])]),n("h4",{attrs:{id:"访问连接设置session"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问连接设置session"}},[s._v("#")]),s._v(" 访问连接设置session")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://localhost:3000/set",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:3000/set"),n("OutboundLink")],1),s._v(" "),n("img",{attrs:{src:a(409),alt:"session-result-01"}})]),s._v(" "),n("h4",{attrs:{id:"查看数据库session是否存储"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库session是否存储"}},[s._v("#")]),s._v(" 查看数据库session是否存储")]),s._v(" "),n("p",[n("img",{attrs:{src:a(410),alt:"session-result-01"}})]),s._v(" "),n("h4",{attrs:{id:"查看cookie中是否种下了sessionid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看cookie中是否种下了sessionid"}},[s._v("#")]),s._v(" 查看cookie中是否种下了sessionId")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:3000"),n("OutboundLink")],1),s._v(" "),n("img",{attrs:{src:a(411),alt:"session-result-01"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);