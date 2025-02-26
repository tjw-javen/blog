(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{567:function(n,t,a){"use strict";a.r(t);var e=a(54),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"js-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-函数"}},[n._v("#")]),n._v(" JS 函数")]),n._v(" "),a("blockquote",[a("p",[n._v("整篇文章都与JS的函数相关。")])]),n._v(" "),a("h3",{attrs:{id:"从函数的定义开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从函数的定义开始"}},[n._v("#")]),n._v(" 从函数的定义开始")]),n._v(" "),a("ol",[a("li",[n._v("每个函数实际上都是一个 "),a("code",[n._v("Function")]),n._v(" 对象，即： "),a("code",[n._v("(function(){}).constructor === Function")])]),n._v(" "),a("li",[n._v("函数是 头等对象/一等公民\n"),a("ol",[a("li",[n._v("函数可以像任何其他对象一样具有属性和方法")]),n._v(" "),a("li",[n._v("可以赋值给变量（"),a("code",[n._v("函数表达式")]),n._v("）")]),n._v(" "),a("li",[n._v("可以作为参数传递给函数（"),a("code",[n._v("高阶函数")]),n._v("）")]),n._v(" "),a("li",[n._v("可以作为另一个函数的返回值（"),a("code",[n._v("闭包")]),n._v("）")])])])]),n._v(" "),a("p",[n._v("定义函数的方式有 4 种：")]),n._v(" "),a("ol",[a("li",[a("code",[n._v("new Function(str)")]),n._v(";")]),n._v(" "),a("li",[n._v("函数表达式 "),a("code",[n._v("var fn = function() {}")])]),n._v(" "),a("li",[n._v("函数声明 "),a("code",[n._v("function fn() {}")])]),n._v(" "),a("li",[n._v("箭头函数 "),a("code",[n._v("var fn = () => {}")])])]),n._v(" "),a("p",[n._v("PS："),a("code",[n._v("new Function")]),n._v(" 声明的对象是在"),a("strong",[n._v("函数创建时解析")]),n._v("的，故比较低效")]),n._v(" "),a("h3",{attrs:{id:"什么是闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包"}},[n._v("#")]),n._v(" 什么是闭包？")]),n._v(" "),a("p",[n._v("MDN的定义："),a("code",[n._v("函数")]),n._v("与对其状态即"),a("code",[n._v("词法环境")]),n._v("的引用共同构成闭包（closure）。也就是说，闭包可以让你"),a("strong",[n._v("从内部函数访问外部函数作用域")])]),n._v(" "),a("p",[n._v("在JavaScript，函数在每次创建时生成闭包。waht????（"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[n._v("MDN说的..."),a("OutboundLink")],1),n._v("）")]),n._v(" "),a("p",[n._v("小红书上的更好理解一点："),a("code",[n._v("闭包是指有权访问另外一个函数作用域中的变量的函数")])]),n._v(" "),a("p",[n._v("也就是说，这就是闭包：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function saySomething(){\n        var name = 'mokou';\n        return function () {\n            console.log(name);\n        }\n    }\n\n    var say = saySomething()\n    say()\n")])])]),a("h3",{attrs:{id:"闭包产生的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包产生的原因"}},[n._v("#")]),n._v(" 闭包产生的原因？")]),n._v(" "),a("p",[n._v("根据 JS 的垃圾回收机制（不提新生代和老生代），根据"),a("code",[n._v("可达性算法")]),n._v("：不可达就会被回收。")]),n._v(" "),a("p",[n._v("什么是不可达？简单来说："),a("code",[n._v("堆")]),n._v("内存中没有在"),a("code",[n._v("栈")]),n._v("内存中存放引用（即：没有指针指向堆）就视为不可达。（不懂堆栈的可以看下上一篇JS基础篇）")]),n._v(" "),a("p",[n._v("上面案例代码中："),a("code",[n._v("saySomething")]),n._v(" 方法的返回值的引用存在了 "),a("code",[n._v("say")]),n._v(" 变量中，所以可达，故：引用不会被销毁，从而产生闭包。")]),n._v(" "),a("h3",{attrs:{id:"说一个闭包的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一个闭包的使用场景"}},[n._v("#")]),n._v(" 说一个闭包的使用场景？")]),n._v(" "),a("p",[n._v("案例一：请求出错的提示框（多个请求同时出错一般都只有一个提示框）")]),n._v(" "),a("p",[n._v("实现思路：使用传说中的设计模式 "),a("code",[n._v("单例模式")])]),n._v(" "),a("p",[n._v("以下是单例模式的实现：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    const Singleton = (function() {\n        var _instance;\n        return function(obj) {\n            return _instance || (_instance = obj);\n        }\n    })();\n\n    var a = new Singleton({x: 1});\n    var b = new Singleton({y: 2});\n\n    console.log(a === b);\n")])])]),a("p",[n._v("PS：上例还有一个优点："),a("code",[n._v("_instance")]),n._v(" 是私有的，外部不能更改（保证安全无污染/可信）")]),n._v(" "),a("p",[n._v("案例二：解决 "),a("code",[n._v("var")]),n._v(" 在 "),a("code",[n._v("for")]),n._v(" + "),a("code",[n._v("setTimeout")]),n._v(" 混合场景中的BUG")]),n._v(" "),a("p",[n._v("BUG 展示：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    for (var i=1; i<=5; i++) {\n        setTimeout(function() {\n            console.log(i);\n        }, i*300 );\n    }\n")])])]),a("p",[n._v("上例会打印："),a("code",[n._v("6 6 6 6 6")])]),n._v(" "),a("p",[n._v("因为 "),a("code",[n._v("var")]),n._v(" 是函数作用域（原因1），而 "),a("code",[n._v("setTimeout")]),n._v(" 是异步执行（原因2），所以：当 "),a("code",[n._v("console.log")]),n._v(" 执行的时候 "),a("code",[n._v("i")]),n._v(" 已经等于 "),a("code",[n._v("6")]),n._v(" 了（BUG产生）")]),n._v(" "),a("p",[n._v("在没有 "),a("code",[n._v("let")]),n._v(" 和 "),a("code",[n._v("const")]),n._v(" 的年代，常用的解决方式就是闭包")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    for (var i = 1; i <= 5; i++) {\n        (function(j) {\n            setTimeout(function() {\n                console.log(j);\n            }, j*300);\n        })(i);\n    }\n")])])]),a("h3",{attrs:{id:"闭包的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的缺点"}},[n._v("#")]),n._v(" 闭包的缺点？")]),n._v(" "),a("p",[n._v("缺点：")]),n._v(" "),a("ol",[a("li",[n._v("性能考量：闭包在处理速度和内存消耗方面对脚本性能具有负面影响（多执行了一个函数，多了一个内存指向）")]),n._v(" "),a("li",[n._v("可能内存溢出。（比如：在闭包中的 "),a("code",[n._v("addEventListener")]),n._v(" 没有被 "),a("code",[n._v("removeEventListener")]),n._v("）")])]),n._v(" "),a("h3",{attrs:{id:"函数表达式和函数声明的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数表达式和函数声明的区别"}},[n._v("#")]),n._v(" 函数表达式和函数声明的区别？")]),n._v(" "),a("p",[n._v("主要区别在")]),n._v(" "),a("ol",[a("li",[n._v("函数声明被提升到了"),a("code",[n._v("函数定义")]),n._v("（可以在函数声明之前使用）")]),n._v(" "),a("li",[n._v("函数表达式要根据定义的方式进行判断\n"),a("ul",[a("li",[n._v("通过 "),a("code",[n._v("var")]),n._v(" 定义：有变量声明提升")]),n._v(" "),a("li",[n._v("通过 "),a("code",[n._v("let 和 const")]),n._v(" 定义：没有变量提升")])])])]),n._v(" "),a("h3",{attrs:{id:"什么是变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是变量提升"}},[n._v("#")]),n._v(" 什么是变量提升？")]),n._v(" "),a("p",[n._v("JavaScript 中，函数及变量（通过"),a("code",[n._v("var")]),n._v("方式）的"),a("code",[n._v("声明")]),n._v("都将被提升到函数的最顶部。")]),n._v(" "),a("p",[n._v("案例：以下会输出什么结果？")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    var name = 'zmz';\n\n    function say(){\n        var name;\n        console.log(name);\n\n        var name = 'mokou';\n        console.log(name);\n    }\n\n    say();\n")])])]),a("p",[n._v("答案是：先输出 "),a("code",[n._v("undefined")]),n._v(" 再输出 "),a("code",[n._v("mokou")])]),n._v(" "),a("p",[n._v("因为在函数 "),a("code",[n._v("say")]),n._v(" 内部也声明了一个 "),a("code",[n._v("name")]),n._v("（是通过 "),a("code",[n._v("var")]),n._v("）声明的，所以会声明提升，但是未赋值，所以首先输出的是 "),a("code",[n._v("undefined")]),n._v("，之后是正常流程，输出 "),a("code",[n._v("mokou")])]),n._v(" "),a("p",[n._v("PS：由于 "),a("code",[n._v("var")]),n._v(" 的变量提升很不友好，所以在 ES6 中添加了 "),a("code",[n._v("let")]),n._v(" 和 "),a("code",[n._v("const")]),n._v(" （本章主要讲函数，暂略。）")]),n._v(" "),a("h3",{attrs:{id:"函数定义和变量同名会怎么样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数定义和变量同名会怎么样"}},[n._v("#")]),n._v(" 函数定义和变量同名会怎么样？")]),n._v(" "),a("p",[n._v("在生成执行上下文时，会有两个阶段。")]),n._v(" "),a("ol",[a("li",[n._v("创建的阶段（具体步骤是创建 VO），JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，"),a("strong",[n._v("函数的话会将整个函数存入内存中，变量只声明并且赋值为 undefined")])]),n._v(" "),a("li",[n._v("代码执行阶段：我们可以直接提前使用。")])]),n._v(" "),a("p",[n._v("在提升的过程中：函数定义优先于变量提升，变量在执行阶段才会被真正赋值。")]),n._v(" "),a("p",[n._v("举例")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    console.log(typeof a === 'function')\n\n    var a = 1;\n    function a() {}\n\n    console.log(a == 1);\n")])])]),a("p",[n._v("上例会打印 "),a("code",[n._v("true true")])]),n._v(" "),a("h3",{attrs:{id:"说一下箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下箭头函数"}},[n._v("#")]),n._v(" 说一下箭头函数？")]),n._v(" "),a("p",[n._v("箭头函数式 ES6 标准")]),n._v(" "),a("ol",[a("li",[n._v("箭头函数的的this，就是定义时所在的对象")]),n._v(" "),a("li",[a("strong",[n._v("一旦绑定了上下文，就不可改变")]),n._v("（call、apply、bind 都不能改变箭头函数内部 this 的指向）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    let obj = {\n        x () {\n            let y = () => {\n                console.log(this === obj);\n            }\n            y();    // true\n            // call、apply、bind 都不能改变箭头函数内部 this 的指向\n            y.call(window); // true\n            y.apply(window); // true\n            y.bind(window)(); // true\n            // 同时，被bind绑定过的方法，也是不可变的，（不会再次被 bind、call、apply改变this的指向）\n        }\n    }\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("由于this指向问题，所以："),a("strong",[n._v("箭头函数不能当作构造函数")]),n._v("，不能使用new命令")]),n._v(" "),a("li",[n._v("箭头函数没有 "),a("code",[n._v("arguments")]),n._v("，需要手动使用 "),a("code",[n._v("...args")]),n._v(" 参数代替")]),n._v(" "),a("li",[n._v("箭头函数不能用作 Generator 函数")])]),n._v(" "),a("h3",{attrs:{id:"那其他函数的-this-指向问题呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那其他函数的-this-指向问题呢"}},[n._v("#")]),n._v(" 那其他函数的 this 指向问题呢？")]),n._v(" "),a("ol",[a("li",[n._v("以函数的形式调用（this指向 window）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function fn () {\n        console.log(this, 'fn');\n        function subFn () {\n            console.log(this, 'subFn');\n        }\n        subFn(); // window\n    }\n    fn(); // window\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("以方法的形式调用 （this指向 调用函数的对象）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    var x = 'abc';\n    var obj = {\n        x: 123,\n        fn: function () {\n            console.log(this.x);\n        }\n    }\n    obj.fn(); //  123\n    var fn = obj.fn;\n    fn(); // abc\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("以"),a("code",[n._v("call")]),n._v("、"),a("code",[n._v("apply")]),n._v("、"),a("code",[n._v("bind")]),n._v(" 的形式调用（更改指向，箭头函数除外）")]),n._v(" "),a("li",[n._v("以构造函数调用，（指向实例）")])]),n._v(" "),a("ul",[a("li",[a("strong",[n._v("new的实例是 构造函数中return的对象 || this")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    // 构造函数中有 return对象 的情况\n    function A() {\n        return {\n            a : 1\n        }\n    }\n    A.prototype.say = function () {\n        console.log(this, 'xx')\n    }\n    var a = new A();\n    // a = {a: 1}\n    // a.say === undefined\n    // 构造函数中 没有return对象 的情况\n    function A() {\n        // 可以手动 return this\n    }\n    A.prototype.say = function () {\n        console.log(this, 'xx')\n    }\n    var a = new A();\n    a.say();\n    // A {} \"xx\"\n")])])]),a("h3",{attrs:{id:"call-和-apply-的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-和-apply-的不同"}},[n._v("#")]),n._v(" call 和 apply 的不同？")]),n._v(" "),a("ol",[a("li",[n._v("入参不同")]),n._v(" "),a("li",[n._v("性能差异（call比apply快很多）")])]),n._v(" "),a("p",[n._v("性能测试：以下测试环境为 chrome v73")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function work(a, b, c) {}\n\n    for (var j = 0; j < 5; j++) {\n        console.time('apply');\n        for (var i = 0; i < 1000000; i++) {\n            work.apply(this, [1, 2, 3]);\n        }\n        console.timeEnd('apply');\n\n        console.time('call');\n        for (var i = 0; i < 1000000; i++) {\n            work.call(this, 1, 2, 3);\n        }\n        console.timeEnd('call');\n    }\n    \n    /*\n        // apply: 69.355224609375ms\n        // call: 8.7431640625ms\n\n        // apply: 57.72119140625ms\n        // call: 4.146728515625ms\n\n        // apply: 50.552001953125ms\n        // call: 4.12890625ms\n\n        // apply: 50.242919921875ms\n        // call: 4.720947265625ms\n\n        // apply: 49.669921875ms\n        // call: 4.054931640625ms\n    */\n")])])]),a("p",[n._v("测试结果： call 比 apply快 10倍（大约是这样的）")]),n._v(" "),a("p",[n._v("原因："),a("code",[n._v(".apply")]),n._v(" 在运行前要对作为参数的数组进行一系列检验和深拷贝，"),a("code",[n._v(".call")]),n._v(" 则没有这些步骤")]),n._v(" "),a("h3",{attrs:{id:"怎么实现-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现-call"}},[n._v("#")]),n._v(" 怎么实现 call ？")]),n._v(" "),a("p",[n._v("实现思路")]),n._v(" "),a("ol",[a("li",[n._v("前置知识点：\n"),a("ol",[a("li",[n._v("当函数以方法的形式调用时，this指向被调用的对象")]),n._v(" "),a("li",[n._v("函数的参数是值传递")]),n._v(" "),a("li",[n._v("引用类型可写")])])]),n._v(" "),a("li",[n._v("以 "),a("code",[n._v("myCall")]),n._v(" 的第一个参数(暂命名为"),a("code",[n._v("that")]),n._v(")作为 被调用的对象")]),n._v(" "),a("li",[a("code",[n._v("that")]),n._v("上添加一个方法（方法名随意，暂命名"),a("code",[n._v("fn")]),n._v("）")]),n._v(" "),a("li",[n._v("通过 "),a("code",[n._v("that[fn](...args)")]),n._v(" 调用方法（此时"),a("code",[n._v("this")]),n._v("指向为"),a("code",[n._v("that")]),n._v("）")]),n._v(" "),a("li",[n._v("删除掉第3步添加的方法")])]),n._v(" "),a("p",[n._v("具体代码")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    Function.prototype.myCall = function(that, ...args) {\n        let func = this;\n        let fn = Symbol("fn");\n\n        that[fn] = func;\n        let res = that[fn](...args);\n        delete that[fn];\n\n        return res;\n    }\n')])])]),a("p",[n._v("测试一下")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function say(x,y,z) {\n        console.log(this.name, x, y, z)\n    }\n    \n    say.myCall({name: 'mokou'}, 1, 2, 3)\n\n    // 打印 mokou 1 2 3\n")])])]),a("h3",{attrs:{id:"怎么实现一个-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现一个-bind"}},[n._v("#")]),n._v(" 怎么实现一个 bind ？")]),n._v(" "),a("p",[n._v("实现思路")]),n._v(" "),a("ol",[a("li",[a("code",[n._v("bind")]),n._v(" 只改变 "),a("code",[n._v("this")]),n._v(" 指向，不执行函数，那么可以用闭包来实现")]),n._v(" "),a("li",[n._v("具体更改 "),a("code",[n._v("this")]),n._v("指向的问题可以借用 "),a("code",[n._v("call")]),n._v(" 实现")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    Function.prototype.myBind = function(that) {\n        if (typeof this !== 'function') {\n            throw new TypeError('Error')\n        }\n        const _fn = this;\n        return function(...args) {\n            _fn.call(that, ...args)\n        }\n    }\n")])])]),a("p",[n._v("测试一下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function say(x,y,z) {\n        console.log(this.name, x, y, z)\n    }\n\n    const testFn = say.myBind({name: 'mokou'})\n    testFn(1, 2, 3);\n\n    // 打印 mokou 1 2 3\n")])])]),a("h3",{attrs:{id:"说一下尾递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下尾递归"}},[n._v("#")]),n._v(" 说一下尾递归？")]),n._v(" "),a("p",[n._v("PS: 这个小题是半搬运的 @阮一峰 老师的博客")]),n._v(" "),a("p",[n._v("尾递归就是：函数最后"),a("code",[n._v("单纯return函数")]),n._v('，尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。')]),n._v(" "),a("p",[n._v("ES6出现的尾递归，可以将复杂度O(n)的调用记录，换为复杂度O(1)的调用记录")]),n._v(" "),a("p",[n._v("测试：不使用尾递归")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function Fibonacci (n) {\n        if ( n <= 1 ) {return 1};\n        // return 四则运算\n        return Fibonacci(n - 1) + Fibonacci(n - 2);\n    }\n    Fibonacci(10) // 89\n    Fibonacci(100) // 超时\n    Fibonacci(100) // 超时\n")])])]),a("p",[n._v("测试：使用尾递归")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {\n        if( n <= 1 ) {return ac2};\n        return Fibonacci2 (n - 1, ac2, ac1 + ac2);\n    }\n    Fibonacci2(100) // 573147844013817200000\n    Fibonacci2(1000) // 7.0330367711422765e+208\n    Fibonacci2(10000) // Infinity\n")])])]),a("p",[n._v("蹦床函数（协程）：解决递归栈溢出问题，将函数变成循环")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function trampoline(f) {\n        while (f && f instanceof Function) {\n            f = f();\n        }\n        return f;\n    }\n")])])]),a("p",[n._v("尾递归的优化：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function tco(f) {\n        var value;\n        var active = false;\n        var accumulated = [];\n\n        return function accumulator() {\n            accumulated.push(arguments);\n            // 除了第一次执行，其他的执行都是为了传参\n            if (!active) { // 很重要，如果不使用 active关闭后续进入， sum函数超过会溢出\n                // 在第一次进入进入递归优化时激活，关闭后续进入\n                active = true;\n                // 有参数就执行\n                while (accumulated.length) {\n                    // 调用f，顺便清除参数\n                    value = f.apply(this, accumulated.shift());\n                    // 由于while中又调用 f，f调用sum，然后sum在执行时给accumulated塞了一个参数\n                    // 所以 while循环会在sum返回结果前一种执行，直到递归完成\n                }\n                active = false;\n                return value;\n            }\n        };\n    }\n\n    var sum = tco(function(x, y) {\n        if (y > 0) {\n            // 此时的sum是accumulator\n            // 执行sum等于给accumulator传参\n            return sum(x + 1, y - 1)\n        }\n        else {\n            return x\n        }\n    });\n\n    sum(1, 100000)\n")])])]),a("h3",{attrs:{id:"for-in、-for-of、foreach-各自的特点是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-in、-for-of、foreach-各自的特点是什么"}},[n._v("#")]),n._v(" for in、 for of、forEach 各自的特点是什么？")]),n._v(" "),a("ol",[a("li",[a("code",[n._v("for in")]),n._v(" 遍历的是对象的可枚举属性")]),n._v(" "),a("li",[a("code",[n._v("for of")]),n._v(" 遍历的是对象的迭代器属性")]),n._v(" "),a("li",[a("code",[n._v("forEach")]),n._v(" 只能遍历数组，且不能中断（break等无效）")])]),n._v(" "),a("h3",{attrs:{id:"手写一个防抖函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写一个防抖函数"}},[n._v("#")]),n._v(" 手写一个防抖函数？")]),n._v(" "),a("p",[n._v("防抖函数：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function debounce(fn, wait) {\n        let timer = null;\n        return (...args) => {\n            clearTimeout(timer);\n            timer = setTimeout(() => {\n                fn.apply(this, args);\n            }, wait);\n        }\n    }\n")])])]),a("p",[n._v("使用场景：输入框校验")]),n._v(" "),a("h3",{attrs:{id:"手写一个节流函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写一个节流函数"}},[n._v("#")]),n._v(" 手写一个节流函数")]),n._v(" "),a("p",[n._v("节流函数")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function throttle(fn, wait = 300) {\n        let flag = true;\n        return (...args) => {\n            if (!flag) return;\n            flag = false;\n            setTimeout(() => {\n                fn.apply(this, args);\n                flag = true;\n            }, wait);\n        }\n    }\n")])])]),a("p",[n._v("使用场景：")]),n._v(" "),a("ol",[a("li",[n._v("延迟防抖函数："),a("code",[n._v("onscroll")]),n._v(" 时触发的事件")]),n._v(" "),a("li",[n._v("立即执行防抖函数：按钮的点击事件（某种情况下 "),a("code",[n._v("once")]),n._v("函数 更合适）")])]),n._v(" "),a("h3",{attrs:{id:"说一下-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下-class"}},[n._v("#")]),n._v(" 说一下 Class ？")]),n._v(" "),a("p",[n._v("ES6 的 "),a("code",[n._v("class")]),n._v(" 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。")]),n._v(" "),a("h3",{attrs:{id:"class-和-function-有什么不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-和-function-有什么不同"}},[n._v("#")]),n._v(" Class 和 function 有什么不同")]),n._v(" "),a("ol",[a("li",[n._v("类没有变量提升，")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    new B();\n    class B {}\n    // Uncaught ReferenceError: B is not defined\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("类的所有方法，都不可枚举")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    class A {\n        constructor() {\n            this.x = 1;\n        }\n        static say() {\n            return 'zmz';\n        }\n        print() {\n            console.log(this.x);\n        }\n    }\n    Object.keys(A); // []\n    Object.keys(A.prototype); // []\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("类的的所有方法，没有原型对象"),a("code",[n._v("prototype")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    接例2\n    console.log(A.say.prototype); // undefined\n    console.log(new A().print.prototype); // undefined\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[n._v("类不能直接使用，必须使用 new 调用。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    接例2\n    A();\n    // Uncaught TypeError: Class constructor A cannot be invoked without 'new'\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[n._v("类内部启用严格模式")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    class B {\n        x = 1\n    }\n    // Uncaught SyntaxError: Identifier 'B' has already been declared\n")])])]),a("h3",{attrs:{id:"es5-怎么实现继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5-怎么实现继承"}},[n._v("#")]),n._v(" ES5 怎么实现继承？")]),n._v(" "),a("p",[n._v("需要完成功能")]),n._v(" "),a("ol",[a("li",[n._v("继承 构造属性")]),n._v(" "),a("li",[n._v("继承 原型方法")]),n._v(" "),a("li",[n._v("纠正构造器")])]),n._v(" "),a("p",[n._v("主流继承方案")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function Parent () {\n        this.name = 'mokou';\n    }\n    \n    function Child() {\n        Parent5.call(this);\n        this.age = '18';\n    }\n\n    Child.prototype = Object.create(Parent.prototype);\n    Child.prototype.constructor = Child;\n")])])]),a("p",[n._v("继承优化（参考 "),a("code",[n._v("Babel")]),n._v(" 的降级方案）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function inherits(subClass, superClass) {\n        subClass.prototype = Object.create(superClass && superClass.prototype, {\n            constructor: {\n                value: subClass,\n                writable: true,\n                configurable: true\n            }\n        });\n        if (superClass) Object.setPrototypeOf(subClass, superClass);\n    }\n")])])]),a("h3",{attrs:{id:"说一下-new-的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下-new-的过程"}},[n._v("#")]),n._v(" 说一下 new 的过程？")]),n._v(" "),a("ol",[a("li",[n._v("创建一个空对象")]),n._v(" "),a("li",[n._v("新对象的"),a("code",[n._v("__proto__")]),n._v("指向构造函数的 "),a("code",[n._v("prototype")])]),n._v(" "),a("li",[n._v("绑定 "),a("code",[n._v("this")]),n._v("，指向构造方法")]),n._v(" "),a("li",[n._v("返回新对象")])]),n._v(" "),a("p",[n._v("详细代码")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    function myNew() {\n        var obj = new Object()\n        var Con = [].shift.call(arguments)\n        obj.__proto__ = Con.prototype\n        var result = Con.apply(obj, arguments)\n        return typeof result === 'object' ? result : obj\n    }\n")])])]),a("h3",{attrs:{id:"说一下原型链吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下原型链吧"}},[n._v("#")]),n._v(" 说一下原型链吧？")]),n._v(" "),a("ol",[a("li",[n._v("对象都有 "),a("code",[n._v("__proto__")]),n._v("， 它是一个访问器属性，指向了我们不能直接访问到的内部属性 "),a("code",[n._v("[[prototype]]")])]),n._v(" "),a("li",[n._v("函数都有 "),a("code",[n._v("prototype")]),n._v("，每个实例对象的 "),a("code",[n._v("__proto__")]),n._v(" 指向它的构造函数的 "),a("code",[n._v("prototype")]),n._v(" "),a("ul",[a("li",[a("code",[n._v("son.__proto__ === Son.prototype")])])])]),n._v(" "),a("li",[n._v("属性查找会在原型链上一层一层的寻找属性\n"),a("ul",[a("li",[a("code",[n._v("Son.prototype.__proto__ === Parent.prototype")])])])]),n._v(" "),a("li",[n._v("层层向上直到一个对象的原型对象为 "),a("code",[n._v("null")]),n._v("。"),a("code",[n._v("null")]),n._v(" 没有原型，并作为这个原型链中的最后一个环节。\n"),a("ul",[a("li",[a("code",[n._v("son.__proto__.__proto__........ === null")])])])])]),n._v(" "),a("p",[n._v("举例：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    class Parent {}\n    class Son extends Parent{}\n    \n    const log = console.log;\n    \n    const son = new Son();\n    const parent = new Parent();\n    \n    log(son.constructor === Son)\n    log(son.__proto__ === son.constructor.prototype)\n    \n    log(son.__proto__ === Son.prototype)\n    log(Son.prototype.__proto__ === Parent.prototype)\n    log(Parent.prototype.__proto__ === Object.prototype)\n    log(Object.prototype.__proto__ === null)\n    \n    log(son.__proto__.__proto__.__proto__.__proto__ === null)\n\n    log(Son.constructor === Function)\n    log(Son.__proto__ === Parent)\n    \n    log(Parent.constructor === Function)\n    log(Parent.__proto__ === Object.__proto__)\n")])])]),a("p",[n._v("PS：由于 "),a("code",[n._v("__proto__")]),n._v(" 的性能问题和兼容性问题，不推荐使用。")]),n._v(" "),a("p",[n._v("推荐")]),n._v(" "),a("ul",[a("li",[n._v("使用 "),a("code",[n._v("Object.getPrototypeOf")]),n._v(" 获取原型属性")]),n._v(" "),a("li",[n._v("通过 "),a("code",[n._v("Object.setPrototypeOf")]),n._v(" 修改原型属性")]),n._v(" "),a("li",[n._v("通过 "),a("code",[n._v("Object.create()")]),n._v(" 继承原型")])]),n._v(" "),a("p",[n._v("PS： "),a("code",[n._v("for in")]),n._v(" 和 "),a("code",[n._v("Object.keys")]),n._v(" 会调用原型 属性")]),n._v(" "),a("ul",[a("li",[n._v("不调用不可枚举属性")]),n._v(" "),a("li",[n._v("isPrototypeOf 和 hasOwnProperty")])]),n._v(" "),a("h3",{attrs:{id:"说一下-静态属性-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下-静态属性-方法"}},[n._v("#")]),n._v(" 说一下 静态属性/方法 ？")]),n._v(" "),a("p",[n._v("静态属性/方法：就是不需要实例化类，就能直接调用的 属性/方法。")]),n._v(" "),a("p",[n._v("综合上面"),a("code",[n._v("Parent")]),n._v("和"),a("code",[n._v("Son")]),n._v("的例子")]),n._v(" "),a("p",[n._v("不管是 "),a("code",[n._v("son")]),n._v("、"),a("code",[n._v("Son")]),n._v("还是"),a("code",[n._v("Parent")]),n._v("，它们都是对象，所以都可以直接赋值，也能在"),a("code",[n._v("__proto__")]),n._v("上赋值")]),n._v(" "),a("p",[n._v("所以静态属性/方式直接赋值就可以了")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    Parent.x = 1\n    Parent.__proto__.x =2\n\n    console.log(Parent.x)  // 1\n    console.log(Parent.__proto__.x) // 2\n")])])]),a("p",[n._v("如果使用 ES6的 "),a("code",[n._v("Class")]),n._v(" 定义一个类")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    class A {\n        constructor() {\n            this.x = 1;\n        }\n        static say() {\n            console.log('zmz');\n        }\n        print() {\n            console.log(this.x);\n        }\n    }\n\n    A.say()\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);