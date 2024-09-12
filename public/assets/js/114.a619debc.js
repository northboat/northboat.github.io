(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1377:function(v,_,l){"use strict";l.r(_);var i=l(1),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"运输层概述"}},[v._v("运输层概述")]),v._v(" "),_("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),_("p",[v._v("面向通信的最高层，面向应用的最底层")]),v._v(" "),_("p",[v._v("只有位于网络边缘部分的主机才有运输层，路由器最高到网络层，也就是说数据在网络上传输的过程中并没有用到传输层")]),v._v(" "),_("p",[v._v("主机通信：本质上来讲是应用进程到应用进程的通信")]),v._v(" "),_("p",[v._v("运输层的功能：")]),v._v(" "),_("ul",[_("li",[v._v("提供应用进程之间的逻辑通信，如微信到微信，QQ 到 QQ，而不能微信到 QQ")]),v._v(" "),_("li",[v._v("提供端到端服务，如 P2P 下载器")])]),v._v(" "),_("p",[v._v("不同于网络层，网络层提供的是主机到主机的通信")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("层级")]),v._v(" "),_("th",[v._v("通信范围")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("数据链路层")]),v._v(" "),_("td",[v._v("PPP/HDLC：点对点；局域网：MAC 通信")])]),v._v(" "),_("tr",[_("td",[v._v("网络层")]),v._v(" "),_("td",[v._v("主机到主机")])]),v._v(" "),_("tr",[_("td",[v._v("传输层")]),v._v(" "),_("td",[v._v("端到端；进程到进程")])])])]),v._v(" "),_("h3",{attrs:{id:"功能"}},[v._v("功能")]),v._v(" "),_("p",[v._v("一个计算机具有很多进程，需要提供 IP 分用和复用的功能")]),v._v(" "),_("p",[v._v("TCP/IP 模型的运输层有两个主要协议")]),v._v(" "),_("ul",[_("li",[v._v("用户数据报协议 UDP")]),v._v(" "),_("li",[v._v("传输控制协议 TCP")])]),v._v(" "),_("p",[v._v("两个对等运输实体在通信时传送的数据单位叫做"),_("strong",[v._v("运输协议数据单元 TPDU")])]),v._v(" "),_("p",[v._v("TCP：提供全双工的可靠协议，数据单位协议是 "),_("strong",[v._v("TCP 报文段")])]),v._v(" "),_("ul",[_("li",[v._v("面向连接的协议，提供面向连接服务")]),v._v(" "),_("li",[v._v("只支持点对点单播")]),v._v(" "),_("li",[v._v("复杂，如电子邮件、万维网、文件传输")])]),v._v(" "),_("p",[v._v("UDP：提供不可靠的通信，数据单位协议是 "),_("strong",[v._v("UDP 报文或用户数据报")])]),v._v(" "),_("ul",[_("li",[v._v("无连接的协议，提供无连接服务")]),v._v(" "),_("li",[v._v("单播、多播、广播")]),v._v(" "),_("li",[v._v("简单，如多媒体应用")])]),v._v(" "),_("p",[v._v("传输层的功能")]),v._v(" "),_("ul",[_("li",[v._v("传输层的分用和复用")]),v._v(" "),_("li",[v._v("流量控制")]),v._v(" "),_("li",[v._v("可靠传输")]),v._v(" "),_("li",[v._v("拥塞控制")])]),v._v(" "),_("h3",{attrs:{id:"端口"}},[v._v("端口")]),v._v(" "),_("p",[v._v("使用端口号的方法对不同进程进行标识")]),v._v(" "),_("p",[v._v("有了端口以后，我们可以通过 IP+端口 的方式区分不同网络的不同进程")]),v._v(" "),_("p",[v._v("端口用一个 16 位端口号进行标志，运行 65535 个不同的端口号，并且，端口号只具有本地意义，即只用于标识本主机应用层的各进程")]),v._v(" "),_("p",[v._v("两大类端口")]),v._v(" "),_("ul",[_("li",[v._v("服务器端使用的端口号")]),v._v(" "),_("li",[v._v("客户端使用的端口：比较大，四万往上")])]),v._v(" "),_("p",[v._v("常见端口")]),v._v(" "),_("ul",[_("li",[v._v("RPC: 111")]),v._v(" "),_("li",[v._v("DNS: 53")]),v._v(" "),_("li",[v._v("TFTP: 69")]),v._v(" "),_("li",[v._v("SNMP: 161")]),v._v(" "),_("li",[v._v("SMTP: 25")]),v._v(" "),_("li",[v._v("FTP: 21/20")]),v._v(" "),_("li",[v._v("Telnet: 23")]),v._v(" "),_("li",[v._v("HTTP: 80")]),v._v(" "),_("li",[v._v("HTTPS: 443")])]),v._v(" "),_("h2",{attrs:{id:"udp-概述"}},[v._v("UDP 概述")]),v._v(" "),_("p",[v._v("在 IP 数据报服务之上增加了很少功能")]),v._v(" "),_("ul",[_("li",[v._v("复用和分用的功能")]),v._v(" "),_("li",[v._v("差错检测的功能")])]),v._v(" "),_("h3",{attrs:{id:"udp-的主要特点"}},[v._v("UDP 的主要特点")]),v._v(" "),_("ul",[_("li",[v._v("无连接的协议")]),v._v(" "),_("li",[v._v("不保证可靠交付，尽最大努力")]),v._v(" "),_("li",[v._v("面向报文，一次性发出整个报文，一次交付整个报文")]),v._v(" "),_("li",[v._v("没有拥塞控制")]),v._v(" "),_("li",[v._v("支持一对一、一对多、多对一和多对多的交互通信1")]),v._v(" "),_("li",[v._v("首部开销小，只有 8 字节")])]),v._v(" "),_("p",[v._v("面向报文的 UDP：将应用层的报文整个封装到 UDP 用户数据报中，不切割，不拆分")]),v._v(" "),_("ul",[_("li",[v._v("应用程序必须选择大小合适的报文，不然延迟会很大")])]),v._v(" "),_("h3",{attrs:{id:"首部和差错控制"}},[v._v("首部和差错控制")]),v._v(" "),_("p",[v._v("2+2+2+2 字节")]),v._v(" "),_("ul",[_("li",[v._v("源端口")]),v._v(" "),_("li",[v._v("目的端口")]),v._v(" "),_("li",[v._v("长度")]),v._v(" "),_("li",[v._v("检验和")])]),v._v(" "),_("p",[v._v("基于端口的分用和复用")]),v._v(" "),_("ul",[_("li",[v._v("复用用的是源端口")]),v._v(" "),_("li",[v._v("分用用的是目的端口")])]),v._v(" "),_("p",[v._v("校验和实现差错控制")]),v._v(" "),_("ul",[_("li",[v._v("在数据链路层中使用 CRC 技术检测冗余位的误码率实现差错控制，这里 UDP 使用的并不是 CRC，将首部和数据一起检验，若校验有错，直接丢弃")]),v._v(" "),_("li",[v._v("虽然做了差错校验，UDP 仍然是不可靠的数据传输")])]),v._v(" "),_("h2",{attrs:{id:"tcp"}},[v._v("TCP")]),v._v(" "),_("h3",{attrs:{id:"tcp-概述"}},[v._v("TCP 概述")]),v._v(" "),_("p",[v._v("面向连接的运输层协议，在无连接、不可靠的 IP 网络服务基础上提供可靠交付的服务")]),v._v(" "),_("p",[v._v("TCP 特点")]),v._v(" "),_("ul",[_("li",[v._v("面向连接")]),v._v(" "),_("li",[v._v("点对点")]),v._v(" "),_("li",[v._v("可靠交付")]),v._v(" "),_("li",[v._v("全双工通信")]),v._v(" "),_("li",[v._v("面向字节流，它要对每个字节均编号")])]),v._v(" "),_("p",[v._v("注意")]),v._v(" "),_("ul",[_("li",[v._v("TCP 连接是一条虚连接，并不是物理连接")]),v._v(" "),_("li",[v._v("TCP 根据窗口值和网络拥塞程度来决定报文段的字节大小，意思是可以拆分，也可以等待积累多了再一起发")])]),v._v(" "),_("p",[v._v("TCP 的连接")]),v._v(" "),_("ul",[_("li",[v._v("TCP 连接的两端并不是主机，而是进程"),_("strong",[v._v("套接字 socket")])]),v._v(" "),_("li",[v._v("套接字：IP+端口号，参考 TCP/IP Sockets in C")])]),v._v(" "),_("p",[v._v("TCP 报文段的首部格式：同样分为首部和数据部分")]),v._v(" "),_("p",[v._v("首部共 20 字节")]),v._v(" "),_("ul",[_("li",[v._v("源端口和目的端口")]),v._v(" "),_("li",[v._v("序号（seq）：要发送数据的首地址字节编号（TCP 对数据中每个字节都有编号）")]),v._v(" "),_("li",[v._v("确认号（ack）：期望收到的下一个字节序号，如 a 向 b 发送了编号 1001 到 2000 的字节数据，b 想要继续接收，其发给 a TCP 报文的确认号则为 2001")]),v._v(" "),_("li",[v._v("数据偏移")]),v._v(" "),_("li",[v._v("保留")]),v._v(" "),_("li",[v._v("URG：紧急处理")]),v._v(" "),_("li",[v._v("ACK：ACK=1 表示确认号有效")]),v._v(" "),_("li",[v._v("PSH：push=1 表示向上提交数据")]),v._v(" "),_("li",[v._v("RST：当连接出现问题，RST=1 重置连接")]),v._v(" "),_("li",[v._v("SYN：建立连接的一种方式，SYN=1 表示同意确认连接")]),v._v(" "),_("li",[v._v("FIN：终结连接")]),v._v(" "),_("li",[v._v("窗口：调节发送双方每次发送多少数据")]),v._v(" "),_("li",[v._v("校验和：差错校验")]),v._v(" "),_("li",[v._v("紧集指针：表示紧集数据有多少个")]),v._v(" "),_("li",[v._v("选项：定义 MSS 大小（maximum segment size）")]),v._v(" "),_("li",[v._v("填充：使首部满足 4 字节整数倍")])]),v._v(" "),_("p",[v._v("不同层级的差错校验")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("层级")]),v._v(" "),_("th",[v._v("协议")]),v._v(" "),_("th",[v._v("校验范围")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("数据链路层")]),v._v(" "),_("td",[v._v("CRC")]),v._v(" "),_("td",[v._v("首部和数据")])]),v._v(" "),_("tr",[_("td",[v._v("网络层")]),v._v(" "),_("td",[v._v("IP 数据首部校验和")]),v._v(" "),_("td",[v._v("首部")])]),v._v(" "),_("tr",[_("td",[v._v("运输层")]),v._v(" "),_("td",[v._v("UDP/TCP")]),v._v(" "),_("td",[v._v("伪首部、首部和数据")])])])]),v._v(" "),_("h3",{attrs:{id:"流量控制机制"}},[v._v("流量控制机制")]),v._v(" "),_("p",[v._v("IP 网络提供的是不可靠传输，整个计算机网络只有一个可靠协议 TCP")]),v._v(" "),_("p",[v._v("TCP 可靠传输机制")]),v._v(" "),_("ul",[_("li",[v._v("编号：编号即给每个字节进行编号")]),v._v(" "),_("li",[v._v("确认机制：接收方需要对每一个数据进行确认接收")]),v._v(" "),_("li",[v._v("超时机制：若在规定时间内未收到确认，发送方重传")]),v._v(" "),_("li",[v._v("自动重传机制：若未收到确认，将自动重传")])]),v._v(" "),_("h4",{attrs:{id:"停止-等待协议"}},[v._v("停止-等待协议")]),v._v(" "),_("blockquote",[_("p",[v._v("有点像数据链路层的流量控制")])]),v._v(" "),_("p",[v._v("停止等待协议：每发送一个分组后要等待对方的确认，确认后才可以发下一个")]),v._v(" "),_("p",[v._v("这样会出现两个问题")]),v._v(" "),_("ul",[_("li",[v._v("B 收到数据时检测出了差错，直接丢弃")]),v._v(" "),_("li",[v._v("传输过程中丢失")])]),v._v(" "),_("p",[v._v("上述两种情况下，发送方 A 都不会收到确认")]),v._v(" "),_("p",[v._v("解决方案：超时重传")]),v._v(" "),_("p",[v._v("如果确认号丢了怎么办？")]),v._v(" "),_("p",[v._v("解决方案：编号")]),v._v(" "),_("ul",[_("li",[v._v("发送的数据和确认都具有编号，同组数据的发送和确认编号一致")]),v._v(" "),_("li",[v._v("若长时间未收到确认（确认丢了），发送方将重新发送上次放的编号的数据，B 收到后发现该编号已有，则丢弃本组数据并再次发送确认号")]),v._v(" "),_("li",[v._v("同理，当发送方 A 收到已有编号的确认号，则将其丢弃，避免重复发送")])]),v._v(" "),_("p",[v._v("自动重传机制：重传是自动进行的，不需要接收方向发送方请求")]),v._v(" "),_("p",[v._v("回顾一下链路层的连续 ARQ 协议")]),v._v(" "),_("p",[v._v("一次发送多个分组，通过滑动窗口协议控制发送方和接收方所能发送和接受的分组的数量和编号")]),v._v(" "),_("p",[v._v("接收方采用累计确认的方式，采用 GBN 方法进行重传")]),v._v(" "),_("ul",[_("li",[v._v("链路层的窗口大小是固定的，而 TCP 的窗口是动态的")])]),v._v(" "),_("h3",{attrs:{id:"拥塞控制机制"}},[v._v("拥塞控制机制")]),v._v(" "),_("blockquote",[_("p",[v._v("重点")])]),v._v(" "),_("p",[v._v("对资源的需求超出了该资源提供的可用部分，网络性能就会变坏，这种现象叫做拥塞，最坏结果，系统崩溃")]),v._v(" "),_("p",[v._v("导致因素")]),v._v(" "),_("ul",[_("li",[v._v("缓存太小")]),v._v(" "),_("li",[v._v("链路容量不足")]),v._v(" "),_("li",[v._v("处理数据太慢")])]),v._v(" "),_("p",[v._v("根本原因：对资源需求 > 可用资源量")]),v._v(" "),_("p",[v._v("拥塞控制和流量控制的区别")]),v._v(" "),_("ul",[_("li",[v._v("拥塞控制是一个全局性的控制，涉及多方面因素")]),v._v(" "),_("li",[v._v("而流量控制仅仅是点对点控制，是端到端的问题")])]),v._v(" "),_("h4",{attrs:{id:"开环控制和闭环控制"}},[v._v("开环控制和闭环控制")]),v._v(" "),_("p",[v._v("开环控制：将路修得足够大，力争不发生拥塞，不可取，往往造成大量资源浪费")]),v._v(" "),_("p",[v._v("闭环控制：通过反馈信号采取响应控制措施")]),v._v(" "),_("p",[v._v("一些基本概念")]),v._v(" "),_("ul",[_("li",[v._v("MSS：maximum segment size，是数据字段的最大长度，是发送数据的基本单位，即必须为 MMS 的整数倍")]),v._v(" "),_("li",[v._v("窗口\n"),_("ul",[_("li",[v._v("接收窗口：根据接收端接受能力确认窗口值")]),v._v(" "),_("li",[v._v("拥塞窗口：根据网络状况确定的大小")]),v._v(" "),_("li",[v._v("发送窗口：发送端根据网络拥塞情况和接收端能力确定的窗口值")]),v._v(" "),_("li",[v._v("真正的窗口值 = Min(拥塞窗口值, 接收窗口值)")])])]),v._v(" "),_("li",[v._v("传输轮次：一来一回叫做一个传输轮次，即所有数据发送和确认完，即为一个传输轮次")])]),v._v(" "),_("p",[v._v("控制拥塞窗口的原则：只要没有拥塞，令拥塞窗口大点，反之令其小点")]),v._v(" "),_("p",[v._v("拥塞是基于反馈的，反馈有")]),v._v(" "),_("ul",[_("li",[v._v("重传定时器超时：已经拥塞")]),v._v(" "),_("li",[v._v("收到三个重复的 ACK：可能产生拥塞")])]),v._v(" "),_("h4",{attrs:{id:"tcp-拥塞控制算法"}},[v._v("TCP 拥塞控制算法")]),v._v(" "),_("p",[v._v("四种拥塞控制算法")]),v._v(" "),_("ul",[_("li",[v._v("cwnd 的单位为 MMS，发送从 1 个 MMS 开始，指数倍增加到 SSTH 个 MMS，再逐个增加")]),v._v(" "),_("li",[v._v("完全窗口的概念，发送窗口的值等于一个接收窗口的数据值，我们就说发送方发送了一个完全窗口")]),v._v(" "),_("li",[v._v("RTT 指一轮发送和接收所需的总时间")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("算法")]),v._v(" "),_("th",[v._v("执行过程")]),v._v(" "),_("th",[v._v("特点")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("慢开始(Slow Start)")]),v._v(" "),_("td",[v._v("设置初始拥塞窗口 cwnd，每次收到一个确认报文段，令 cwnd+1（重传的不算）；设置慢开始初始门限 SSTH，就是 cwnd 的上限值；当 cwnd 达到门阀，执行拥塞避免算法；当出现拥塞，迅速将窗口大小降为 1，门限值降为 Max(cwnd/2, 2)，继续执行慢开始算法，当可能出现拥塞，执行快重传、快恢复算法")]),v._v(" "),_("td",[v._v("从小到大逐渐增大窗口数值，每收到一个确认，cwnd 加一，每经过一个轮次，cwnd 加倍，这一阶段拥塞窗口将呈指数级增加")])]),v._v(" "),_("tr",[_("td",[v._v("拥塞避免算法")]),v._v(" "),_("td",[v._v("当 cwnd > SSTH 时，让 cwnd 每经过一个轮次只加一，同时 SSTH 也加一")]),v._v(" "),_("td",[v._v("让拥塞窗口呈线性增加")])]),v._v(" "),_("tr",[_("td",[v._v("快重传和快恢复算法")]),v._v(" "),_("td",[v._v("当发生丢包时，接收方快速连续重传三个相同编号的 ACK 消息，发送方收到三个连续重复的 ACK 后，采用快恢复算法，将 cwnd 和门阀值 SSTH 均降为 cwnd / 2，同时采用拥塞避免算法")]),v._v(" "),_("td",[v._v("这里包含了两个算法，二者视作一体，快重传发送的三个冗余的 ACK 将触发快恢复")])])])]),v._v(" "),_("p",[v._v("始终注意实际窗口 = Min(拥塞窗口, 接收窗口)")]),v._v(" "),_("p",[v._v("习题位于 P13 00:30:00")]),v._v(" "),_("h3",{attrs:{id:"tcp-的连接建立"}},[v._v("TCP 的连接建立")]),v._v(" "),_("p",[v._v("采用客户服务器方式")]),v._v(" "),_("ul",[_("li",[v._v("发起连接建立的进程叫做客户")]),v._v(" "),_("li",[v._v("被动接收连接的是服务器")])]),v._v(" "),_("p",[v._v("三次握手：SYN 表示同意建立连接，ACK 表示是确认信息，seq 是发送数据的字节编号的起始位置，ack 是希望收到的字节的编号的起始位置")]),v._v(" "),_("ul",[_("li",[v._v("客户端请求：SYN = 1, ACK = 0, seq = x")]),v._v(" "),_("li",[v._v("服务器确认：SYN = 1, ACK = 1, seq = y, ack = x+1")]),v._v(" "),_("li",[v._v("客户端确认确认：SYN = 0, ACK = 1, seq = x+1, ack = y+1")])]),v._v(" "),_("p",[v._v("三次握手后，连接建立，可以开始发送数据，注意第三次握手的 TCP 首部中 URG = 1，表示要紧急发送")]),v._v(" "),_("p",[v._v("四次挥手，前两步和后两步完全一样，因为是全双工，需要双向断连")]),v._v(" "),_("ul",[_("li",[v._v("客户端断连：FIN = 1, ACK = 1, seq = u")]),v._v(" "),_("li",[v._v("服务器确认：FIN = 0, ACK = 1, seq = v, ack = u+1")]),v._v(" "),_("li",[v._v("服务器断连：FIN = 1, ACK = 1, seq = w, ack = u+1")]),v._v(" "),_("li",[v._v("客户端确认：FIN = 0, ACK = 1, seq = u+1, ack = w+1")])]),v._v(" "),_("p",[v._v("四次挥手，等待 2MSL 后，二者才断开连接，避免最后一个数据丢失")]),v._v(" "),_("ul",[_("li",[v._v("MSL：报文最大生存时间")])]),v._v(" "),_("p",[v._v("TCP/IP 综合题: P13 00:50:00")]),v._v(" "),_("ul",[_("li",[v._v("IP 分组由谁发送看源地址和目的地址")]),v._v(" "),_("li",[v._v("判断 TCP 建立过程看 SYN、ACK、URG 状态和序号/确认号是否对应")]),v._v(" "),_("li",[v._v("是否填充看首部记录的数据段长度，若小于 46 则要填充，注意首部中的记录是十六进制，需要转化")]),v._v(" "),_("li",[v._v("计算收到数据长度，看第一个发送数据的序号和最后一个数据的确认号，相减即为大小（不考虑握手数据）")]),v._v(" "),_("li",[v._v("TCP 数据传输经过多少路由器，TTL 相减")])]),v._v(" "),_("h2",{attrs:{id:"数据交换模式"}},[v._v("数据交换模式")]),v._v(" "),_("h3",{attrs:{id:"电路交换"}},[v._v("电路交换")]),v._v(" "),_("p",[v._v("交换：建立专用的物理连接，如两部电话机只需要一对电线就可连接")]),v._v(" "),_("p",[v._v("三个阶段")]),v._v(" "),_("ul",[_("li",[v._v("建立连接")]),v._v(" "),_("li",[v._v("通信")]),v._v(" "),_("li",[v._v("释放连接")])]),v._v(" "),_("p",[v._v("优点")]),v._v(" "),_("ul",[_("li",[v._v("双方专用，时延小")]),v._v(" "),_("li",[v._v("实时性强")]),v._v(" "),_("li",[v._v("按发送顺序传输数据，不存在失序问题")]),v._v(" "),_("li",[v._v("适用于传输 模拟信号")]),v._v(" "),_("li",[v._v("交换设备及控制均较简单")])]),v._v(" "),_("p",[v._v("缺点")]),v._v(" "),_("ul",[_("li",[v._v("建立连接时间较长")]),v._v(" "),_("li",[v._v("线路被独占，空闲时其他设备也无法使用，利用率小")]),v._v(" "),_("li",[v._v("因为数据直达，不同类型、规格、速率的终端很难相互通信")]),v._v(" "),_("li",[v._v("这种通信方式非常适合语音（如打电话）这种实时性很高的业务，但不适合数据传输业务")]),v._v(" "),_("li",[v._v("没有差错控制能力")])]),v._v(" "),_("h3",{attrs:{id:"报文交换"}},[v._v("报文交换")]),v._v(" "),_("p",[v._v("典型的：UDP")]),v._v(" "),_("p",[v._v("让每个报文携带目的地址、源地址等信息，采用存储转发的传输方式，不需要建立连接")]),v._v(" "),_("p",[v._v("优点")]),v._v(" "),_("ul",[_("li",[v._v("不需要建立连接，随时发送")]),v._v(" "),_("li",[v._v("因为存储转发，便于设置代码检验和数据重发设置，同时可以进行路径选择，重传时可以更换路径，提高可靠性")]),v._v(" "),_("li",[v._v("不占用通信线路，提高利用率")])]),v._v(" "),_("p",[v._v("缺点")]),v._v(" "),_("ul",[_("li",[v._v("转发延迟较高")]),v._v(" "),_("li",[v._v("只适合数字通信")]),v._v(" "),_("li",[v._v("节点增加会造成传送时延增加")]),v._v(" "),_("li",[v._v("没有流量控制")])]),v._v(" "),_("h3",{attrs:{id:"分组交换"}},[v._v("分组交换")]),v._v(" "),_("p",[v._v("同样采用存储转发，将报文切成小块，每个小报文均携带目的地址、源地址等信息，即均带有首部")]),v._v(" "),_("p",[v._v("也叫 IP 分组，各个小报文以流水线的形式进行发送")]),v._v(" "),_("p",[v._v("实现方式")]),v._v(" "),_("ul",[_("li",[v._v("数据报：就是 IP 数据报，无连接，不可靠，不能保证按序到达")]),v._v(" "),_("li",[v._v("虚电路：有连接的服务，需要经过建立-传输-拆除的过程，每个分组都带有虚电路的标识，到达顺序严格遵循发送顺序，端之间可以建立多个虚连接")])])])}),[],!1,null,null,null);_.default=t.exports}}]);