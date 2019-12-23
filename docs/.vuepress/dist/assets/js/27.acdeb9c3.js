(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{416:function(e,t,v){"use strict";v.r(t);var _=v(0),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"开篇：vue-js-的精髓——组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开篇：vue-js-的精髓——组件","aria-hidden":"true"}},[e._v("#")]),e._v(" 开篇：Vue.js 的精髓——组件")]),e._v(" "),v("h2",{attrs:{id:"写在前面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在前面","aria-hidden":"true"}},[e._v("#")]),e._v(" 写在前面")]),e._v(" "),v("p",[e._v("Vue.js，无疑是当下最火热的前端框架 "),v("em",[e._v("Almost")]),e._v("，而 Vue.js 最精髓的，正是它的组件与组件化。写一个 Vue 工程，也就是在写一个个的组件。")]),e._v(" "),v("p",[e._v("业务场景是千变万化的，而不变的是 Vue.js 组件开发的核心思想和使用技巧，掌握了 Vue.js 组件的各种开发模式，再复杂的业务场景也可以轻松化解。本小册则着重介绍笔者在 3 年的 Vue.js 开发及两年的 "),v("a",{attrs:{href:"https://github.com/iview/iview",target:"_blank",rel:"noopener noreferrer"}},[e._v("iView"),v("OutboundLink")],1),e._v(" 开源中积累和沉淀的对 Vue.js 组件的见解和经验。")]),e._v(" "),v("p",[e._v("本小册"),v("strong",[e._v("不会")]),e._v("介绍 Vue.js 的基础用法，因为市面上已经沉淀了大量的相关技术资料，而且 Vue.js 的文档已经足够详细。如果您尚未接触 Vue.js 或正打算开始了解，推荐您先阅读笔者出版的"),v("a",{attrs:{href:"https://item.jd.com/12215519.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Vue.js 实战》"),v("OutboundLink")],1),e._v("（清华大学出版社）一书，它适合刚接触 Vue.js 的开发者。因此，本小册适合已经了解或使用过 Vue.js 的开发者。")]),e._v(" "),v("p",[e._v("这一节，我们先笼统地聊聊 Vue.js 组件和组件化以及本小册各章节的梳理。")]),e._v(" "),v("h2",{attrs:{id:"组件的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的分类","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件的分类")]),e._v(" "),v("p",[e._v("一般来说，Vue.js 组件主要分成三类：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("由 "),v("code",[e._v("vue-router")]),e._v(" 产生的每个页面，它本质上也是一个组件（.vue），主要承载当前页面的 HTML 结构，会包含数据获取、数据整理、数据可视化等常规业务。整个文件相对较大，但一般不会有 "),v("code",[e._v("props")]),e._v(" 选项和 "),v("code",[e._v("自定义事件")]),e._v("，因为它作为路由的渲染，不会被复用，因此也不会对外提供接口。")]),e._v(" "),v("p",[e._v("在项目开发中，我们写的大部分代码都是这类的组件（页面），协同开发时，每人维护自己的页面，很少有交集。这类组件相对是最好写的，因为主要是还原设计稿，完成需求，不需要太多模块和架构设计上的考虑。")])]),e._v(" "),v("li",[v("p",[e._v("不包含业务，独立、具体功能的基础组件，比如"),v("strong",[e._v("日期选择器")]),e._v("、"),v("strong",[e._v("模态框")]),e._v("等。这类组件作为项目的基础控件，会被大量使用，因此组件的 API 进行过高强度的抽象，可以通过不同配置实现不同的功能。比如笔者开源的 iView，就是包含了 50 多个这样基础组件的 UI 组件库。")]),e._v(" "),v("p",[e._v("每个公司都有自己的组件使用规范或组件库，但要开发和维护一套像 iView 这样的组件库，投入的人力和精力还是很重的，所以出于成本考虑，很多项目都会使用已有的开源组件库。")]),e._v(" "),v("p",[e._v("独立组件的开发难度要高于第一类组件，因为它的侧重点是 API 的设计、兼容性、性能、以及复杂的功能。这类组件对 JavaScript 的编程能力有一定要求，也会包含非常多的技巧，比如在不依赖 Vuex 和 Bus（因为独立组件，无法依赖其它库）的情况下，各组件间的通信，还会涉及很多脑壳疼的逻辑，比如日期选择器要考虑不同时区、国家的日历习惯，支持多种日期格式。")]),e._v(" "),v("p",[e._v("本小册也会重点介绍此类组件的各种开发模式和技巧，对应不同的模式，会带有具体的组件实战。")])]),e._v(" "),v("li",[v("p",[e._v("业务组件。它不像第二类独立组件只包含某个功能，而是在业务中被多个页面复用的，它与独立组件的区别是，业务组件只在当前项目中会用到，不具有通用性，而且会包含一些业务，比如数据请求；而独立组件不含业务，在任何项目中都可以使用，功能单一，比如一个具有数据校验功能的输入框。")]),e._v(" "),v("p",[e._v("业务组件更像是介于第一类和第二类之间，在开发上也与独立组件类似，但寄托于项目，你可以使用项目中的技术栈，比如 Vuex、axios、echarts 等，所以它的开发难度相对独立组件要容易点，但也有必要考虑组件的可维护性和复用性。")])])]),e._v(" "),v("h2",{attrs:{id:"小册的内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小册的内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 小册的内容")]),e._v(" "),v("p",[e._v("因为本小册是围绕 Vue.js 组件展开的，所以第二节会讲解 Vue.js 组件的三个 API："),v("code",[e._v("prop")]),e._v("、"),v("code",[e._v("event")]),e._v("、"),v("code",[e._v("slot")]),e._v("，当然，如果你已经开发过一些独立组件，完全可以跳过这节内容。")]),e._v(" "),v("p",[e._v("3 - 7 小节会介绍组件间通信的一些方法和黑科技，一部分是 Vue.js 内置的，一部分是自行实现的，在实际开发中，会非常实用。同时也利用这些方法完成了两个具体的实战案例：")]),e._v(" "),v("ol",[v("li",[e._v("具有数据校验功能的表单组件 —— Form；")]),e._v(" "),v("li",[e._v("组合多选框组件 —— CheckboxGroup & Checkbox。")])]),e._v(" "),v("p",[e._v("本小册都会以这种核心科技 + 对应实战的形式展开。")]),e._v(" "),v("p",[e._v("8 - 10 小节介绍 Vue 的构造器 extend 和手动挂载组件 $mount 的用法及案例。Vue.js 除了我们正常 "),v("code",[e._v("new Vue()")]),e._v(" 外，还可以手动挂载的，这 3 节将介绍手动挂载一个 Vue 组件的使用场景。其中涉及到两个案例：")]),e._v(" "),v("ol",[v("li",[e._v("动态渲染 .vue 文件的组件 —— Display；")]),e._v(" "),v("li",[e._v("全局通知组件 —— $Alert。")])]),e._v(" "),v("p",[v("strong",[e._v("Display")]),e._v(" 组件用于将 "),v("code",[e._v(".vue")]),e._v(" 文件渲染出来，线上的案例是 "),v("a",{attrs:{href:"https://run.iviewui.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iView Run"),v("OutboundLink")],1),e._v("，它不需要你重新编译项目，就可以渲染一个标准的 Vue.js 组件。")]),e._v(" "),v("p",[v("strong",[e._v("$Alert")]),e._v(" 是全局的通知组件，它的调用方法不同于常规组件。常规组件使用方法形如：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('<template>\n    <Alert content="通知内容" :duration="3"></Alert>\n</template>\n<script>\n    import Alert from \'../components/alert.vue\';\n    \n    export default {\n        components: { Alert }\n    }\n<\/script>\n\n')])])]),v("p",[e._v("而 "),v("code",[e._v("$Alert")]),e._v(" 的调用更接近 JS 语法：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("export default {\n    methods: {\n        showMessage () {\n            this.$Alert({\n                content: '通知内容',\n                duration: 3\n            });\n        }\n    }\n}\n\n")])])]),v("p",[e._v("虽然与常规 Vue 组件调用方式不同，但底层仍然由 Vue 组件构成和维护。")]),e._v(" "),v("p",[e._v("11 - 12 小节介绍 Render 函数与 Functional Render，并完成一个能够渲染自定义列的 Table 组件。Render 函数也是 Vue.js 组件重要的一部分，只不过在大多数业务中不常使用。本小节会介绍它的使用场景。")]),e._v(" "),v("p",[e._v("13 小节介绍"),v("strong",[e._v("作用域 slot（slot-scope）")]),e._v("，并基于这种方法同样实现 Table 组件。slot 用的很多，但 slot-scope 在业务中并不常用，但在一些特定场景下，比如组件内部有循环体时，会非常实用。")]),e._v(" "),v("p",[e._v("14 - 15 小节介绍递归组件，并完成树形控件 —— Tree。")]),e._v(" "),v("p",[e._v("16 - 19 小节是综合拓展，会着重讲解 Vue.js 容易忽略却很重要的 API，以及对 Vue.js 面试题的详细分析。除此之外，还会总结笔者在两年的 iView 开源经历中的经验，除了技术细节外，还包括开源项目的持续性发展、推广等。")]),e._v(" "),v("h2",{attrs:{id:"结语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),v("p",[e._v("三年前，我开始接触 Vue.js 框架，当时就被它的轻量、组件化和友好的 API 所吸引。与此同时，我也开源了 iView 项目。三年的磨(cǎi )砺(kēng)，沉淀了不少关于 Vue.js 组件的经验。")]),e._v(" "),v("p",[e._v("本小册的内容也许不会让你的技术一夜间突飞猛进，但绝对使你醍醐灌顶。")]),e._v(" "),v("p",[e._v("那么，请准备好一台电脑和一杯咖啡，一起来探索 Vue.js 的精髓吧。")])])}),[],!1,null,null,null);t.default=r.exports}}]);