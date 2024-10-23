(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{639:function(t,s,a){"use strict";a.r(s);var r=a(4),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"影响-linux-服务器性能的因素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#影响-linux-服务器性能的因素"}},[t._v("#")]),t._v(" 影响 linux 服务器性能的因素")]),t._v(" "),s("h3",{attrs:{id:"cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("描述")]),t._v(" "),s("p",[t._v("CPU 是操作系统稳定运行的根本，CPU 的速度与性能在很大程度上决定了系统整体的性能，因此，CPU 数量越多、主频越高，服务器性能也就相对越好。")])]),t._v(" "),s("h3",{attrs:{id:"内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[t._v("#")]),t._v(" 内存")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("描述")]),t._v(" "),s("p",[t._v("内存的大小也是影响 Linux 性能的一个重要的因素，内存太小，系统进程将被阻塞，应用也将变得缓慢，甚至失去响应；内存太大，导致资源浪费。")])]),t._v(" "),s("h3",{attrs:{id:"磁盘-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘-io"}},[t._v("#")]),t._v(" 磁盘 IO")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("描述")]),t._v(" "),s("p",[t._v("磁盘的 I/O 性能直接影响应用程序的性能，在一个有频繁读写的应用中，如果磁盘 I/O 性能得不到满足，就会导致应用停滞。好在现今的磁盘都采用了很多方法来提高 I/O 性能，比如常见的磁盘 RAID 技术。")])]),t._v(" "),s("h3",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("描述")]),t._v(" "),s("p",[t._v("Linux 下的各种应用，一般都是基于网络的，因此网络带宽也是影响性能的一个重要因素，低速的、不稳定的网络将导致网络应用程序的访问阻塞，而稳定、高速的网络带宽，可以保证应用程序在网络上畅通无阻地运行。幸运的是，现在的网络一般都是千兆带宽或光纤网络，带宽问题对应用程序性能造成的影响也在逐步降低。")])]),t._v(" "),s("h2",{attrs:{id:"常用的-linux-系统性能监控的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的-linux-系统性能监控的命令"}},[t._v("#")]),t._v(" 常用的 linux 系统性能监控的命令")]),t._v(" "),s("h3",{attrs:{id:"uptime-系统整体性能评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uptime-系统整体性能评估"}},[t._v("#")]),t._v(" uptime(系统整体性能评估)")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/performance/uptime.jpg",alt:"uptime"}}),t._v("\n这里需要注意的是：load average 这个输出值，这三个值的大小一般不能大于系统 CPU 的个数。")]),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" 那么如何查看 cpu 的个数呢？")]),t._v(" "),s("p",[t._v("查看系统 cpu 的信息："),s("code",[t._v("cat /proc/cpuinfo")]),t._v("中的信息，其中 "),s("code",[t._v("cpu cores")]),t._v(" 即为 cpu 的核数。")]),t._v(" "),s("p",[t._v("也可以用 "),s("code",[t._v('cat /proc/cpuinfo |grep "cores"|uniq')]),t._v(" 直接查看。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@test ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# cat /proc/cpuinfo |grep "cores"|uniq')]),t._v("\ncpu cores    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"cpu-的性能评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu-的性能评估"}},[t._v("#")]),t._v(" cpu 的性能评估")]),t._v(" "),s("h4",{attrs:{id:"利用-vmstat-命令监控-cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-vmstat-命令监控-cpu"}},[t._v("#")]),t._v(" 利用 vmstat 命令监控 cpu")]),t._v(" "),s("p",[s("code",[t._v("vmstat 2 10")]),t._v(" （每 2 秒监控一次 监控 10 次）\n"),s("img",{attrs:{src:"/linux/performance/vmstat.jpg",alt:"vmstat"}})]),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" procs\n"),s("block-bg",[s("code",[t._v("r")]),t._v(" 表示运行和等待 cpu 时间片的进程数，这个值如果长期大于 cpu 的个数，则需要增加系统 cpu。 "),s("br"),s("code",[t._v("b")]),t._v(" 表示等待资源的进程数。")])],1),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" CPU\n"),s("block-bg",[s("code",[t._v("us")]),t._v(" 列显示了用户进程消耗 CPU 时间百分比，us 比较高的时候，说明用户进程消耗 cpu 的时间多，如果长期大于 50%，就需要优化程序和算法。"),s("br"),s("code",[t._v("sy")]),t._v(" 列显示了内核进程消耗的 cpu 时间百分比，sy 值较高的时候，说明内核消耗的 cpu 资源很多。"),s("br"),t._v("根据经验，us+sy 的参考值为 80%，如果 us+sy 大于 80%说明可能存在 CPU 资源不足。")])],1),t._v(" "),s("h4",{attrs:{id:"利用-sar-命令监控系统-cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-sar-命令监控系统-cpu"}},[t._v("#")]),t._v(" 利用 sar 命令监控系统 cpu")]),t._v(" "),s("p",[s("code",[t._v("sar")]),t._v(" 命令会增加系统开销 但是影响不大，"),s("code",[t._v("yum install sysstat")]),t._v(" 安装 sar 命令")]),t._v(" "),s("p",[s("code",[t._v("sar -u 3 5")]),t._v("（u 显示系统所有 cpu 在采样时间内的负载状态）\n"),s("img",{attrs:{src:"/linux/performance/sar.jpg",alt:"sar"}}),t._v(" "),s("block-bg",[s("code",[t._v("%user")]),t._v("：用户进程消耗 cpu 的时间百分比"),s("br"),s("code",[t._v("%nice")]),t._v("：运行正常进程所消耗 cpu 的百分比"),s("br"),s("code",[t._v("%system")]),t._v("：系统消耗 cpu 时间百分比"),s("br"),s("code",[t._v("%iowait")]),t._v("：IO 等待所占用 cpu 时间百分比"),s("br"),s("code",[t._v("%steal")]),t._v("：内存在相对紧张的环境下 pagein 强制对不同页面进行的 steal 操作"),s("br"),s("code",[t._v("%idle")]),t._v("：cpu 处在空闲时间的百分比")])],1),t._v(" "),s("h3",{attrs:{id:"内存性能评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存性能评估"}},[t._v("#")]),t._v(" 内存性能评估")]),t._v(" "),s("h4",{attrs:{id:"利用-free-指令监控内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-free-指令监控内存"}},[t._v("#")]),t._v(" 利用 free 指令监控内存")]),t._v(" "),s("p",[s("code",[t._v("free -m")]),t._v(" 查看以 M 为单位的内存使用情况\n"),s("img",{attrs:{src:"/linux/performance/free.jpg",alt:"free"}}),t._v(" "),s("block-bg",[t._v("一般有这样一个经验公式："),s("br"),t._v("应用程序可用内存/系统物理内存>70%时，表示系统内存资源非常充足，不影响系统性能。"),s("br"),t._v("应用程序可用内存/系统物理内存<20%时，表示系统内存资源紧缺，需要增加系统内存。"),s("br"),t._v("20%<应用程序可用内存/系统物理内存<70%时，表示系统内存资源基本能满足应用需求，暂时不影响系统性能。")])],1),t._v(" "),s("h4",{attrs:{id:"利用-vmstat-监控内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-vmstat-监控内存"}},[t._v("#")]),t._v(" 利用 vmstat 监控内存")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/performance/vmstat.jpg",alt:"vmstat"}}),t._v(" "),s("block-bg",[s("code",[t._v("swpd")]),t._v(" 表示切换到内存交换去的内存数量（k），如果 swpd 的值不为 0，或者比较大，但是 si，so 的值长期为 0，这种情况不用担心，不会影响性能。"),s("br"),s("code",[t._v("free")]),t._v(" 表示空闲的物理内存数量。"),s("br"),s("code",[t._v("buff")]),t._v(" 表示 buffers cache 的内存数量，一般对设备的读写才需要缓冲。"),s("br"),s("code",[t._v("cache")]),t._v(" 表示 page cached 的内存数量。一般作为文件系统 cached，频繁访问的文件都会被 cached，如果 cache 值较大，说明 cached 的文件较多，如果此时 IO 中的 bi 比较小，说明文件系统效率比较好。"),s("br"),s("code",[t._v("si")]),t._v(" 表示由磁盘调入内存，也就是内存进入内存交换区的数量。"),s("br"),s("code",[t._v("so")]),t._v(" 表示由内存调入磁盘，也就是内存交换区进入内存的数量。"),s("br"),t._v("一般情况下，so si 的值都为 0。如果 si so 的值长期不为 0，则表示系统内存不足，需要增加内存。")])],1),t._v(" "),s("h3",{attrs:{id:"磁盘-io-性能评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘-io-性能评估"}},[t._v("#")]),t._v(" 磁盘 IO 性能评估")]),t._v(" "),s("h4",{attrs:{id:"iostat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iostat"}},[t._v("#")]),t._v(" iostat")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/performance/iostat.jpg",alt:"iostat"}}),t._v(" "),s("block-bg",[s("code",[t._v("kB_reads/s")]),t._v(" 每秒读取的数据块数。"),s("br"),s("code",[t._v("kB_wrtn/s")]),t._v(" 每秒写入的数据块数。"),s("br"),s("code",[t._v("KB_read")]),t._v(" 读取的所有块数。"),s("br"),s("code",[t._v("KB_wrtn")]),t._v(" 写入的所有块数。"),s("br"),t._v("这几个值没有标准 如果长期都很大 肯定是不正常的。")])],1),t._v(" "),s("h4",{attrs:{id:"利用-sar-评估磁盘性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-sar-评估磁盘性能"}},[t._v("#")]),t._v(" 利用 sar 评估磁盘性能")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/performance/sar-d.jpg",alt:"sar-d"}}),t._v(" "),s("block-bg",[s("code",[t._v("await")]),t._v(" 平均每次设备 I/O 操作的等待时间（毫秒）。"),s("br"),s("code",[t._v("svctm")]),t._v(" 平均每次设备 I/O 操作的服务时间（毫秒）。"),s("br"),s("code",[t._v("%util")]),t._v(" 一秒中有百分之几的时间用于 I/O 操作。")])],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("评判标准")]),t._v(" "),s("p",[t._v("正常情况下 "),s("code",[t._v("svctm 应该是小于 await")]),t._v(" 的，svctm 的值和磁盘性能，cpu 内存等都有关系。")]),t._v(" "),s("p",[t._v("如果 svctm 的值和 await 的值相近表示几乎没有 I/O 等待，磁盘性能很好，如果 await 的值远高于 svctm，表示 I/O 队列等待时间太长，系统上的应用程序将变慢，此时可以通过更换更快的硬盘来解决问题。")]),t._v(" "),s("p",[s("code",[t._v("%util 越小越好")]),t._v("，如果%util 接近 100%表示磁盘产生的 I/O 请求太多，I/O 系统已经满负载在工作，此时可以通过优化程序或者更换更快的磁盘来解决问题。")])]),t._v(" "),s("h3",{attrs:{id:"网络性能评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络性能评估"}},[t._v("#")]),t._v(" 网络性能评估")]),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" 通过 ping 命令检测网络的连通性。")]),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" 通过 netstat -i 组合检测网络接口状况。")]),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" 通过 netstat -r 组合检测系统路由表信息。")]),t._v(" "),s("p",[s("i",{staticClass:"el-icon-s-opportunity"}),t._v(" 通过 sar -n 组合显示系统的网络运行状态（sar -n DEV 5 3）。")]),t._v(" "),s("p",[t._v("查看 tcp 连接数最多的 ip：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pant")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":22"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $5}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -F"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $4}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),t._v(" -c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-nr")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("命令解释")]),t._v(" "),s("p",[s("code",[t._v("awk -F\":\" '{print $4}'")]),t._v(" 表示把结果的第 4 列用:号分割")]),t._v(" "),s("p",[s("code",[t._v("sort -nr")]),t._v(" 排序，-n 以数值大小排序，-r 倒序，从大到小。")]),t._v(" "),s("p",[s("code",[t._v("uniq -c")]),t._v(" 删除重复的行，-c 表示加上每行出现的次数。")]),t._v(" "),s("p",[t._v("netstat 命令是一个监控 TCP/IP 网络的非常有用的工具，它可以显示路由表、实际的网络连接以及每一个网络接口设备的状态信息。")]),t._v(" "),s("p",[t._v("netstat -pant")]),t._v(" "),s("p",[s("code",[t._v("-p")]),t._v(" ：显示正在使用 Socket 的程序识别码和程序名称；")]),t._v(" "),s("p",[s("code",[t._v("-a")]),t._v(" ：显示所有连线中的 Socket；")]),t._v(" "),s("p",[s("code",[t._v("-n")]),t._v(" ：直接使用 ip 地址，而不通过域名服务器；")]),t._v(" "),s("p",[s("code",[t._v("-t")]),t._v(" ：显示 TCP 传输协议的连线状况。")])]),t._v(" "),s("p",[t._v("提取访问 nginx 服务器最多的 10 个 ip：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" access.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $1}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-nr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n10")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"文章来源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章来源"}},[t._v("#")]),t._v(" 文章来源")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000039953362",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文章"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);