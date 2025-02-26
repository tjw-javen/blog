(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{569:function(n,a,e){"use strict";e.r(a);var t=e(54),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"async-await详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await详解"}},[n._v("#")]),n._v(" async await详解")]),n._v(" "),e("blockquote",[e("p",[e("code",[n._v("async await")]),n._v("本身就是"),e("code",[n._v("promise + generator")]),n._v("的语法糖。")])]),n._v(" "),e("p",[n._v("会讲述以下内容")]),n._v(" "),e("ol",[e("li",[n._v("async awiat 实质 || 降级策略")]),n._v(" "),e("li",[n._v("async await 主要特性")])]),n._v(" "),e("h3",{attrs:{id:"async-await-实质-降级策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await-实质-降级策略"}},[n._v("#")]),n._v(" async await 实质 && 降级策略")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    // 转换目标 async1\n\n    // async function async1() {\n    //    console.log('async1 start');\n    //    await async2();\n    //    console.log('async1 end');\n    // }\n")])])]),e("p",[n._v("下面使用 promise + generate 实现 async await")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    function async1() {\n        // 将 async 转换成 *，将 awiat 转换成 yield\n        var awaitInstance = (function* () {\n            console.log('async1 start');\n            yield async2();\n            console.log('async1 end');\n        })()\n\n        // 自动执行 await 及后续代码\n        // 简单起见，不处理异常情况\n        function step() {\n            var next = awaitInstance.next();\n            // 使用Promise获取 异步/同步 方法的结果，再执行下一步\n            Promise.resolve(next.value).then(function (val) {\n                if (!next.done) step();\n            })\n        }\n        step();\n\n        // 返回Promise\n        return Promise.resolve(undefined);\n    }\n")])])]),e("p",[n._v("将上述代码完善异常操作，得到async await的降级策略，只要AST 将 async 转换成 *，将 awiat 转换成 yield，就能实现降级。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    function async1(args) {\n        return myAsyncAwait(function* () {\n            console.log('async1 start');\n            yield async2();\n            console.log('async1 end');\n        });\n    }\n\n    function myAsyncAwait(genFn) {\n        return new Promise(function(resolve, reject) {\n            const gen = genFn();\n            function step(nextFn) {\n                let next;\n                try {\n                    next = nextFn();\n                } catch(e) {\n                    return reject(e);\n                }\n                if(next.done) {\n                    return resolve(next.value);\n                }\n                Promise.resolve(next.value).then(function(v) {\n                    step(function() { return gen.next(v); });\n                }, function(e) {\n                    step(function() { return gen.throw(e); });\n                });\n            }\n            step(function() { return gen.next(undefined); });\n        });\n    }\n")])])]),e("h3",{attrs:{id:"async-await-特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await-特性"}},[n._v("#")]),n._v(" async await 特性")]),n._v(" "),e("ol",[e("li",[n._v("async 一定会返回 promise")]),n._v(" "),e("li",[n._v("async、 await、Promise.resolve() 都是（同步任务）")]),n._v(" "),e("li",[n._v("而await 后续代码都会被推到 microtask 中。等await执行完成后触发。\n"),e("ul",[e("li",[n._v("完成可能是：代码全部完成执行通过 || 或者最终被"),e("code",[n._v(".catch")]),n._v("（其实也是算都执行执行）")]),n._v(" "),e("li",[n._v("如果有未被捕获的异常，就不会进入await下一步（毕竟await的下一步也类似于推到了then中）")])])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    console.log(1);\n\n    async function fn() {\n        console.log(2);\n        await console.log(3);\n        await Promise.resolve(4).then(console.log);;\n        console.log(5);\n\n        // 上面的写法类似于\n        // console.log(2);\n        // console.log(3);\n        // Promise.resolve(4)\n        //   .then(console.log);\n        //   .then(() => {\n        //     console.log(4);\n        // })\n     }\n    fn();\n\n    console.log(6);\n\n    // 打印 1 2 3 6 4 5\n")])])]),e("ol",[e("li",[n._v("可以用await接收async的结果。然后赋值给变量")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    async function fn() {\n        return Promise.resolve('xxxx');\n    }\n\n    async function fn2() {\n        let x = await fn();\n        console.log('x', xxx); // 输出的是值而不是Promise \n    }\n\n    fn2()\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[n._v("await  操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。参考 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await",target:"_blank",rel:"noopener noreferrer"}},[n._v("MDN"),e("OutboundLink")],1)])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    附：\n    在chrome版本 73.0.3683.86（64 位）中,\n    await是可以直接使用的。\n\n    var x = await console.log(1)\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);