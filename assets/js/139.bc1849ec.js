(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{645:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("git 开发规范，不是强制约束。只是为了更好的管理项目，让团队更好的协作而做的规范约束。")])]),s._v(" "),a("h2",{attrs:{id:"分支命令-使用英文名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支命令-使用英文名"}},[s._v("#")]),s._v(" 分支命令（使用英文名）")]),s._v(" "),a("h3",{attrs:{id:"master-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-分支"}},[s._v("#")]),s._v(" master 分支")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("master")]),s._v(" 为主分支，也是用于部署生产环境的分支，确保 "),a("code",[s._v("master")]),s._v(" 分支稳定性")]),s._v(" "),a("p",[a("code",[s._v("master")]),s._v(" 分支一般由 develop 以及 hotfix 分支合并，任何时间都不能直接修改代码")])]),s._v(" "),a("h3",{attrs:{id:"develop-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop-分支"}},[s._v("#")]),s._v(" develop 分支")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("develop")]),s._v(" 为开发分支，始终保持最新完成以及 bug 修复后的代码")])]),s._v(" "),a("h3",{attrs:{id:"feature-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-分支"}},[s._v("#")]),s._v(" feature 分支")]),s._v(" "),a("blockquote",[a("p",[s._v("开发新功能时，以 develop 为基础创建 feature 分支")]),s._v(" "),a("p",[s._v("分支命名: "),a("code",[s._v("feature-")]),s._v(" 开头的为特性分支， 推荐命名规则: "),a("code",[s._v("feature-模块名-功能-开发者简称/feature-user-login-xm")]),s._v("，也可以按其他格式命令只要以 "),a("code",[s._v("feature-")]),s._v(" 开头")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。\n如果测试过程中若存在 bug 需要修复，则直接由开发者在 release 分支修复并提交。\n当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"release-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-分支"}},[s._v("#")]),s._v(" release 分支")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("release")]),s._v(" 为预上线分支，发布提测阶段，会以 "),a("code",[s._v("release")]),s._v(" 分支代码为基准提测")])]),s._v(" "),a("h3",{attrs:{id:"bug-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-分支"}},[s._v("#")]),s._v(" bug 分支")]),s._v(" "),a("blockquote",[a("p",[s._v("分支命名: "),a("code",[s._v("bug-")]),s._v(" 开头的为修复分支，它的命名规则与 "),a("code",[s._v("feature")]),s._v(" 分支类似")]),s._v(" "),a("p",[s._v("线上出现紧急问题时，需要及时修复，以 "),a("code",[s._v("master")]),s._v(" 分支为基线，创建 "),a("code",[s._v("bug")]),s._v(" 分支，修复完成后，需要合并到 "),a("code",[s._v("master")]),s._v(" 分支和 "),a("code",[s._v("develop")]),s._v(" 分支")])]),s._v(" "),a("h2",{attrs:{id:"提交消息规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交消息规范"}},[s._v("#")]),s._v(" 提交消息规范")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("定义"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ADD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UPDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("这 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 类提交消息的类别：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ADD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：扩充添加类型\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：优化类型\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UPDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：调整适应类型\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：缺陷修复类型\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：目录结构调整，注释更新类型\n\n例如：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ADD]新增 xx 功能"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[OPT]优化 SQL 性能"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[UPDATE]升级 restful-api 版本"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"分支开发原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支开发原则"}},[s._v("#")]),s._v(" 分支开发原则")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".从 develop 新建分支（记得先更新本地 develop，在新建个人分支），如下：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout develop（切换到 develop 分支）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin develop（更新 develop 代码）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" feature-user-login-xm develop（从 develop 新建，并切换到新分支）\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".分支细化到某个模块的子功能\n不建议分支太大，如：一个大模块不应该作为一个分支，而是拆分若干个子功能分支\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".分支功能开发完成提交并合并请求\n功能分支建议1-3天工作量，尽量不要超过一周，不方便工作跟踪，也不方便后续 review\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".分支功能开发不能混搭\n不要混搭功能，一个分支既开发登录功能，又同时开发流程功能（不同功能不同分支）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"四-合并请求原则-merge-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-合并请求原则-merge-request"}},[s._v("#")]),s._v(" 四：合并请求原则（merge request）")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.分支合并代码量不宜过大\n建议不超过 200 行代码量，作为一个合并请求，提交给主程序员 review（代码太多，review 效果不好）\n\n2.分支流水线通过才提交合并请求\n每次提交代码到分支，会有分支 CI 的流水线，如有失败，先定位问题、修改提交代码、再次查看流水线，直至全部通过\n\n3.合并请求，注意提交到 master，同时指派和@干系人\n1）合并请求提交到主线分支 master\n2）指派人员是主程序员\n3）@干系人，干系人包括你本次修改可能影响其他模块的模块负责人等\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"五-代码-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-代码-review"}},[s._v("#")]),s._v(" 五.代码 review")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.先看提交人员提交说明，一般提交说明会通过模板进行控制格式\n2.查看本次提交，是否有说明有相关测试（如：修改bug，开发应该有相应的自测记录）\n3.查看本次提交的流水线是否全部通过\n4.查看本次提交对应的单测、自测是否有新增，用例覆盖是否到位（如：按照标准就是分支新增功能，同时新增单测用例，一并提交入库）\n5.最后在变更页面，查看代码diff变动，如果有问题再对应行数，记录review问题\n6.提交人员，修改review的问题代码，直接俄提交代码到个人分支即可，无需再新建合并请求\n7.合并人员，需要再次查看问题是否修改OK，没有问题一个个问题打勾确认\n8.当所有的问题都确认修改合格后，被指派人 被@干系人需要点赞确认，最后有主程序员（被指派人）进行合并\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);