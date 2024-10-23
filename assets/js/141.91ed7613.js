(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{647:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("Git 默认文件名不区分大小写，如果修改了文件名不会显示有改变。")]),s._v(" "),t("p",[s._v("执行 "),t("code",[s._v("git config core.ignorecase false")]),s._v(" 命令配置以后文件名才会区分大小写。虽然可以识别大小写文件名了，但是如果你之前已经 push 到远程了，这样远程的文件名还是不会改变，有可能就是本地和远程两个文件名不同，一个是大写的一个是小写的。为了完全避免这个问题，推荐使用命令 git mv 去重命名，不要直接去重命名文件名。如果远程跟本地不一样，只能先删除远程的，在推送本地的到远程。（目前没有找到其他好方法，可能还有更好的方法。）")]),s._v(" "),t("p",[s._v("建议不要修改该配置。因为我这里使用 vuepress 来做的博客 ，所以很多路由跟文件名有关系，如果大小写不区分容易出现路由找不到的情况。")]),s._v(" "),t("p",[s._v("其实最主要的原因是因为 "),t("code",[s._v("windows")]),s._v(" 和 "),t("code",[s._v("mac")]),s._v(" "),t("mark",[s._v("不区分文件名大小写")]),s._v("，"),t("code",[s._v("linux")]),s._v(" "),t("mark",[s._v("区分文件名大小写")]),s._v("。所以在 linux 操作时，可以避免此问题。")])]),s._v(" "),t("h2",{attrs:{id:"让-git-区分大小写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#让-git-区分大小写"}},[s._v("#")]),s._v(" 让 git 区分大小写")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# flase-区分   true-不分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.ignorecase "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"坑介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#坑介绍"}},[s._v("#")]),s._v(" 坑介绍")]),s._v(" "),t("ol",[t("li",[s._v("通过配置本地虽然可以识别文件名大小写了，但是推送到远程(GitHub)上面文件名还是没有变化，也有可能远程会同时出现两个文件。")]),s._v(" "),t("li",[s._v("如果修改了文件内容，使用 "),t("code",[s._v("git status")]),s._v(" 会发现有两个文件有改动，一个是大写，一个是小写。")]),s._v(" "),t("li",[s._v("如果在其他电脑 "),t("code",[s._v("clone")]),s._v(" 代码就会出现同一个项目文件名不一致，可能会导致严重问题。")])]),s._v(" "),t("h2",{attrs:{id:"如果避坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果避坑"}},[s._v("#")]),s._v(" 如果避坑")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("git mv -f old_name new_name")]),s._v(" 来重命名文件名。")]),s._v(" "),t("h2",{attrs:{id:"如果已经进坑-解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果已经进坑-解决办法"}},[s._v("#")]),s._v(" 如果已经进坑，解决办法")]),s._v(" "),t("code-group",[t("code-block",{attrs:{title:"第一种",active:""}},[t("p",[s._v("适合文件比较少的时候操作。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.先备份文件然后删除文件，然后在执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.把备份的文件拷贝到项目下，并正确命名，然后在执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.然后正常提交、推送，最后提交以后 本地和远程 就会保持一致了。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'修改文件名'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("code-block",{attrs:{title:"第二种"}},[t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还未发现")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])],1)],1)}),[],!1,null,null,null);t.default=e.exports}}]);