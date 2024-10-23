(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{638:function(a,s,n){"use strict";n.r(s);var t=n(4),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("mark",[a._v("分析 pcap 包可以用：Wireshark")])]),a._v(" "),s("h2",{attrs:{id:"命令案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令案例"}},[a._v("#")]),a._v(" 命令案例")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 监听所有接口服务")]),a._v("\ntcpdump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nn")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 监听所有端口 80 的服务")]),a._v("\ntcpdump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 and port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nn")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 监听所有接口服务并输出到文件 /var/log.pcap")]),a._v("\ntcpdump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" /var/log.pcap\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 抓多个指定 ip 的包")]),a._v("\ntcpdump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" ip1 or ip2 or ip3 or ip4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" /tmp/001.pcpa\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 抓指定 ip 和端口 模板")]),a._v("\ntcpdump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" any "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v(" and 端口 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nnv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" 包个数 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" /tmp/001.pcpa\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("h2",{attrs:{id:"参数介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数介绍"}},[a._v("#")]),a._v(" 参数介绍")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-n：指定将每个监听到数据包中的域名转换成 IP 地址后显示，不把网络地址转换成名字\n-nn：指定将每个监听到的数据包中的域名转换成 IP、端口从应用名称转换成端口号后显示\n-vv：输出详细的报文信息\n-v ：输出一个稍微详细的信息，例如在 ip 包中可以包括 ttl 和服务类型的信息\n-c：在收到指定的包的数目后，tcpdump 就会停止\n-i ：指定监听的网络接口(any 表示所有接口)\n-w ：直接将包写入文件中，并不分析和打印出来；\n-T ：将监听到的包直接解释为指定的类型的报文，常见的类型有 rpc （远程过程调用）和 snmp（简单网络管理协议；）\n-X： 告诉 tcpdump 命令，需要把协议头和包内容都原原本本的显示出来（tcpdump 会以 16 进制和 ASCII 的形式显示），这在进行协议分析时是绝对的利器。\n-r ：从指定的文件中读取包(这些包一般通过-w 选项产生)\n可以指定端口：port 80\n指定 ip：host 127.0.0.1\n要指定 ip 和端口，需要用 and：host 127.0.0.1 and port 80\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);