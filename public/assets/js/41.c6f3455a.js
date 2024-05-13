(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1375:function(t,s,a){"use strict";a.r(s);var i=a(1),e=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("网络层，重中之重，甚于链路层，提供无连接、不可靠但统一的传输服务（统一下三层所有不同的协议）")]),t._v(" "),s("blockquote",[s("p",[t._v("我对整个网络的传输过程产生了疑问，网络层说是通过相同的 IP 协议统一了下三层的不同网络，如局域网和广域网，但分组在网络层，帧首尾部套在分组的外侧，最终数据以比特流在物理链路上传输，即使不同的网络在网络层识别到所谓统一的 IP 分组，但怎么去拆解不同的帧从而得到这个 SDU 呢")]),t._v(" "),s("p",[t._v("就是说，你通过网络层协议来统一，但网络层协议在数据的内层，在接收时首先是识别不到的（先识别帧再得到 IP 分组），那是怎么通过一个首先识别不到的数据来辨识一段比特数据呢？")])]),t._v(" "),s("p",[t._v("整个计算机网络就是一个无向图，涉及一些简单的图算法用于路径选择（路由）")]),t._v(" "),s("h2",{attrs:{id:"网络层的功能"}},[t._v("网络层的功能")]),t._v(" "),s("h3",{attrs:{id:"连接异构网络"}},[t._v("连接异构网络")]),t._v(" "),s("p",[t._v("异构网络相连，所谓的统一下三层的不同网络，通过路由器将使用不同下三层协议的网络中继相连接，组成一个大的互联网，这不同于以太网交换机和集线器，这两个东西都只是扩大了广播域，相当于将同一个网络扩展，并没有连接其他网络")]),t._v(" "),s("h3",{attrs:{id:"路由和转发"}},[t._v("路由和转发")]),t._v(" "),s("p",[t._v("路由和转发：路由选择和分组转发，后者根据前者的信息进行")]),t._v(" "),s("img",{attrs:{src:a(466)}}),t._v(" "),s("h3",{attrs:{id:"sdn"}},[t._v("SDN")]),t._v(" "),s("p",[t._v("SDN 基本概念：Software Definition Network，软件定义网络，通过软件控制网络的两个主要功能，即路由和转发，将网络分为两层，控制层和数据层，前者负责路由，采用集中控制的方法，后者负责转发，采用分布式处理（在寻常网络中，二者均为分布式）")]),t._v(" "),s("ul",[s("li",[t._v("控制与转发功能分离")]),t._v(" "),s("li",[t._v("控制层面集中化")]),t._v(" "),s("li",[t._v("接口开放可编程")])]),t._v(" "),s("h3",{attrs:{id:"拥塞控制"}},[t._v("拥塞控制")]),t._v(" "),s("p",[t._v("拥塞控制：由于出现过量的分组而引起网络性能下降的现象称为拥塞，正常来说网络负载线性增加，网络吞吐量也该线性增加，当分组逐渐增加，随着网络负载增加，网络的吞吐量增加缓慢甚至不动，考虑网络已经发生拥塞（被丢弃的分组的数量已经严重影响到了网络性能）")]),t._v(" "),s("p",[t._v("流量控制和拥塞控制的区别：流量控制是点对点的，仅仅对发送端进行流量限制（通过滑动窗口机制），而拥塞控制是网络全局的问题，涉及网络中的所有主机、路由器")]),t._v(" "),s("p",[t._v("拥塞控制的方法：开环控制（预防）和闭环控制（基于反馈）")]),t._v(" "),s("h2",{attrs:{id:"路由算法"}},[t._v("路由算法")]),t._v(" "),s("p",[t._v("每个结点都维护的有一个路由表（结点可以视作为一个路由器），记录去往另一结点的路径和代价（无向无环图）")]),t._v(" "),s("h3",{attrs:{id:"距离-向量路由算法"}},[t._v("距离-向量路由算法")]),t._v(" "),s("blockquote",[s("p",[t._v("RIP/OSPF")])]),t._v(" "),s("p",[t._v("回顾一下图算法中求解多源最短路径的弗罗伊德（Floyd）算法，遍历所有结点的直接边，通过以下公式更新结点间最短距离\n"),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mo",[t._v("<")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("i")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("j")])],1),s("mo",[t._v(">")]),s("mo",[t._v("=")]),s("mi",[t._v("m")]),s("mi",[t._v("i")]),s("mi",[t._v("n")]),s("mtext"),s("mo",{attrs:{stretchy:"false"}},[t._v("{")]),s("mo",[t._v("<")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("i")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("j")])],1),s("mo",[t._v(">")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mo",[t._v("<")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("i")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("k")])],1),s("mo",[t._v(">")]),s("mo",[t._v("+")]),s("mo",[t._v("<")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("k")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("V")]),s("mi",[t._v("j")])],1),s("mo",[t._v(">")]),s("mo",{attrs:{stretchy:"false"}},[t._v("}")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n<V_i,V_j> = min\\,\\{<V_i,V_j>, <V_i,V_k>+<V_k,V_j>\\}\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v(">=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("min")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mopen"},[t._v("{")]),s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v(">")])]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.7335em","vertical-align":"-0.1944em"}}),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v(">")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{staticClass:"mord"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("<")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v(">")])]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mclose"},[t._v("}")])])])])])])],1),t._v("\n距离-向量路由算法：每个结点将自身的路由表直接发送给相邻的所有结点，结点收到路由表后，通过和弗罗伊德算法一样的更新公式去更新自身的路由表")]),t._v(" "),s("p",[t._v("更新的时机为")]),t._v(" "),s("img",{attrs:{src:a(467)}}),t._v(" "),s("p",[t._v("向所有相邻结点发送路由表的时机为：每次路由表有所更新后")]),t._v(" "),s("p",[s("strong",[t._v("路由环路")]),t._v("（是个啥）的问题：当慢收敛导致路由器收到了无用的路由信息时，很可能发生路由环路")]),t._v(" "),s("p",[t._v("举个栗子")]),t._v(" "),s("img",{attrs:{src:a(468)}}),t._v(" "),s("img",{attrs:{src:a(469)}}),t._v(" "),s("p",[t._v("维护这样一张路由表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("源结点\\目的结点")]),t._v(" "),s("th",[t._v("A")]),t._v(" "),s("th",[t._v("B")]),t._v(" "),s("th",[t._v("C")]),t._v(" "),s("th",[t._v("D")]),t._v(" "),s("th",[t._v("E")]),t._v(" "),s("th",[t._v("F")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("B")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",[t._v("12")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("D")]),t._v(" "),s("td",[t._v("16")]),t._v(" "),s("td",[t._v("12")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("9")]),t._v(" "),s("td",[t._v("10")])]),t._v(" "),s("tr",[s("td",[t._v("E")]),t._v(" "),s("td",[t._v("7")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("9")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("C")]),t._v(" "),s("td",[t._v("min(11,19,12)")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("min(8,13,9)")])])])]),t._v(" "),s("p",[t._v("故 C 到其余结点的最短路径为 [11,6,0,3,5,8]，选 B")]),t._v(" "),s("p",[t._v("再举一个栗子")]),t._v(" "),s("img",{attrs:{src:a(470)}}),t._v(" "),s("img",{attrs:{src:a(471)}}),t._v(" "),s("p",[t._v("同样的更新策略，已知")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("源节点\\目的节点")]),t._v(" "),s("th",[t._v("A")]),t._v(" "),s("th",[t._v("B")]),t._v(" "),s("th",[t._v("C")]),t._v(" "),s("th",[t._v("D")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("E")]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",[t._v("12")]),t._v(" "),s("td",[t._v("6")])])])]),t._v(" "),s("p",[t._v("和题给路由表，则有")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("源节点\\目的节点")]),t._v(" "),s("th",[t._v("Net1")]),t._v(" "),s("th",[t._v("Net2")]),t._v(" "),s("th",[t._v("Net3")]),t._v(" "),s("th",[t._v("Net4")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("E")]),t._v(" "),s("td",[t._v("min(9,33,32,28)")]),t._v(" "),s("td",[t._v("min(20,45,42,34)")]),t._v(" "),s("td",[t._v("min(32,28,28,42)")]),t._v(" "),s("td",[t._v("min(44,40,20,30)")])])])]),t._v(" "),s("p",[t._v("故 E 到 net 的最短距离为 [9,29,28,20]，故选 D")]),t._v(" "),s("h3",{attrs:{id:"链路状态路由算法"}},[t._v("链路状态路由算法")]),t._v(" "),s("blockquote",[s("p",[t._v("BGP")])]),t._v(" "),s("p",[t._v("迪杰斯特拉算法（Dijkstra）：选取当前结点，更新所有直接相连的结点距离（不相邻距离记为 ∞），选定距离最小的结点作为新当前结点，并认为前一结点距离源的最短路径已被确定（和普利姆算法其实一模一样，只不过目的不同，要求权值和最小）")]),t._v(" "),s("img",{attrs:{src:a(472)}}),t._v(" "),s("p",[t._v("在链路状态路由算法中，所有结点的路由表是一致的，记录了当前结点到整个网络中其他所有结点的最短路由，每个结点都维护了一个单源最短路径路由表")]),t._v(" "),s("p",[t._v("当当前结点路由表发生改变后，将向网络中除直接连接的所有结点发送它完整的路由表，这一操作叫做"),s("strong",[t._v("洪泛法")]),t._v("，就像泛洪一样把路由表狠狠的群发")]),t._v(" "),s("p",[t._v("收到路由表的结点通过迪杰斯特拉算法更新自身到所有节点的最短路径表，即路由表，完成一次更新")]),t._v(" "),s("h3",{attrs:{id:"层次路由"}},[t._v("层次路由")]),t._v(" "),s("p",[t._v("就是把每个网络的路由转发分为两种，即在自治系统内部的路由和自治系统外部的路由（即连通其他路由器的路由）")]),t._v(" "),s("img",{attrs:{src:a(473)}}),t._v(" "),s("p",[t._v("每个路由器（自治系统）都知道自身区域如何把分组转发到目的地的细节，但对其他区域的内部结构一概不知")]),t._v(" "),s("h2",{attrs:{id:"路由协议和路由器"}},[t._v("路由协议和路由器")]),t._v(" "),s("h3",{attrs:{id:"rip"}},[t._v("RIP")]),t._v(" "),s("p",[t._v("应用层协议，RIP 信息通过 UDP 数据报在各路由器之间进行传输，将自身结点到所有结点的单源最短路径传输给相邻的路由器结点，当路由器收到来自相邻结点的包含 RIP 数据的 UDP 数据报后，将根据相邻结点的单源最短路径更新自己到任一结点的单源最短路径，更新规则如下")]),t._v(" "),s("ul",[s("li",[t._v("当当前路由表中没有到某一结点的表项，而收到的 UDP 数据报表中存在，直接写入当前路由表，并且将路径长度 +1")]),t._v(" "),s("li",[t._v("当当前路由表中存在到 u 的表项，假设长度为 n，但收到的路由表到 u 的距离为 u-2，则更新当前路由表到 u 的表项为收到的那一条，并且长度重写为 n-1")]),t._v(" "),s("li",[t._v("其余情况不做改变")])]),t._v(" "),s("p",[t._v("可以发现，RIP 协议是通过相邻结点的单源最短路径去构造自身的单源最短路径的过程（跳数最少），当距离 >=16 时，我们认为结点不可达")]),t._v(" "),s("p",[t._v("RIP 协议在网络状况差的情况下有可能出现慢收敛问题，且开销随结点数增加（网络规模扩大）不断扩大，所以一般适用于较小的网络")]),t._v(" "),s("h3",{attrs:{id:"ospf"}},[t._v("OSPF")]),t._v(" "),s("p",[t._v("网络层协议，OSPF 数据通过 IP 分组在路由器间传输，通过洪泛法，将自身结点到达相邻结点的距离发送给每一个结点，每一次发送，每一个结点都将根据 Dijkstra 算法通过每条边的距离以及该结点的可达性更新自身已知的可达结点的最短路径")]),t._v(" "),s("ul",[s("li",[t._v("OSPF 采用 Hello 分组来保持和邻居的连接")])]),t._v(" "),s("p",[t._v("第一次迭代，每个结点将只发送和自身直接相邻的结点的距离给剩余结点；第一次更新，每个结点将获得和自身一次间接相连的所有结点的最短路径")]),t._v(" "),s("p",[t._v("以此类推，在不断发送的过程中，结点将不断获取距离自身更远的结点的最短路径距离，以此构造一张统一的路由表")]),t._v(" "),s("ul",[s("li",[t._v("为了减小洪泛法的代价，OSPF 还将同一网络按照层次结构分为不同的区域，最上层的称为主干区，在区域内执行洪泛（区域种类增多，传输更复杂）")])]),t._v(" "),s("p",[t._v("不同于 RIP，OSPF 不存在慢收敛问题，适用于较大的网络")]),t._v(" "),s("p",[t._v("另外，OSPF 的路径权重并不是简单的跳数（代价最低），这可以根据相邻结点的传输速率动态调整，也给了网络最优路径判断更灵活的选择")]),t._v(" "),s("h3",{attrs:{id:"bgp-4"}},[t._v("BGP-4")]),t._v(" "),s("p",[t._v("网络层协议，BGP 信息通过 TCP 连接在网关路由器之间传输，每次传输的数据为路由的完整过程，即整条路径（RIP 和 OSPF 都是传输基于下一跳的路由信息）")]),t._v(" "),s("p",[t._v("每个自治系统（AS）维护一个 BGP 发言人，各自治系统通过 BGP 发言人通过 TCP 连接传输 BGP 协议信息构造路由")]),t._v(" "),s("h3",{attrs:{id:"路由器"}},[t._v("路由器")]),t._v(" "),s("p",[t._v("网络层设备，是一个多端口网桥，是下三层中唯一可以分割广播域的设备，为什么网桥不可以呢？他他妈就一个端口，分割个毛线，想分割起码得两个吧")]),t._v(" "),s("ul",[s("li",[t._v("想减缓广播风暴：加路由器")])]),t._v(" "),s("p",[t._v("而中继器、交换机更加不能分割广播域，由这二者连接的设备仍然属于同一局域网，在进行 MAC 帧传输时，将广播到局域网中的每个主机")]),t._v(" "),s("p",[t._v("路由表和转发表，后者基于前者")]),t._v(" "),s("p",[t._v("路由表")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" routing_table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" port\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("转发表")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" routing_table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),t._v(" port\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("为什么没有距离选项？根据题意自行添加")])])}),[],!1,null,null,null);s.default=e.exports},466:function(t,s,a){t.exports=a.p+"assets/img/image-20230625010813622.e493c1c8.png"},467:function(t,s,a){t.exports=a.p+"assets/img/image-20230625012639765.12b6087f.png"},468:function(t,s,a){t.exports=a.p+"assets/img/image-20230625014804805.0c085480.png"},469:function(t,s,a){t.exports=a.p+"assets/img/image-20230625014825628.cf353fca.png"},470:function(t,s,a){t.exports=a.p+"assets/img/image-20230625015333782.2c90a180.png"},471:function(t,s,a){t.exports=a.p+"assets/img/image-20230625015402530.a1e6bf64.png"},472:function(t,s,a){t.exports=a.p+"assets/img/image-20230625013336992.dc8792a8.png"},473:function(t,s,a){t.exports=a.p+"assets/img/image-20230625013857144.8f13a721.png"}}]);