## iHealth
iHealth 的 demo 示例程序，是一个 MUI 实现的 webapp。


### 使用技术及工具
* [MUI](http://www.dcloud.io/mui.html)（前端框架）
* [artTemplate](https://aui.github.io/art-template/docs/syntax.html)（JS模板引擎）
* [HBuilder](http://www.dcloud.io/index.html)（开发、调试、打包工具）
* [socket.io](https://socket.io/docs/)（实时通讯引擎）

## 启动说明
1. 下载 HBuilder，下载地址：http://www.dcloud.io/index.html
2. 用 HBuilder 打开该项目目录
3. 用 HBuilder 真机调试  
  [HBuilder开发App教程02-环境搭建，HelloWorld以及真机调试](http://blog.csdn.net/uikoo9/article/details/46734079)

### TODO

- [x] 底部选择卡切换
- [x] 首页文章列表
- [x] 文章详情页
- [x] 使用JS模板引擎（artTemplate）渲染页面
- [x] 上拉刷新
- [x] 回到顶部
- [x] 阅读更多
- [x] 阅读量动态增加
- [x] 登陆页面
- [ ] 即时通讯
    - [x] 通讯后台
    - [ ] 用户之间单聊
    - [ ] 用户列表
- [x] 左右滑动切换选择卡
- [ ] 点赞数动态增加
- [ ] 评论
- [x] 文章详情页面排版优化
    - [x] 文章图片自适应屏幕
    - [x] 替换 h3 标签为 strong 标签
- [ ] 下拉刷新

……

### 开发注意事项
* 底部选择栏 单击跳转到新页面 不能用 ```<a href='...'>``` 的形式，也不能用 js 绑定 onclick 事件的方式。需要用绑定 id ，并在 init() 下面实现 mui.plusReady() 函数即可。


### 参考资料
* MUI从入门到精通系列汇总  
http://ask.dcloud.net.cn/article/786

* mui官方文档  
http://dev.dcloud.net.cn/mui/ui/

* artTemplate 官方文档  
https://aui.github.io/art-template/docs/syntax.html

* mui开发注意事项  
http://blog.csdn.net/hbcui1984/article/details/42156409

* 跨平台APP开发框架 - MUI 全套教程【视频教程】  
https://ke.qq.com/course/203400

* Hello MUI发布列表到详情最佳实践  
http://ask.dcloud.net.cn/article/12575

* **底部选择卡切换** 问题的解决：
    * Hbuilder--mui--webview切换子页面问题  
    http://blog.csdn.net/zhuyu19911016520/article/details/70270731
    * HBuilder mui入门教程——（2）含tab选项卡的首页  
    http://blog.csdn.net/anjingshen/article/details/74138717
    * tab选项卡示例教程-nativeObj原生模式tab（含底部凸起大图标）  
    https://github.com/dcloudio/mui/tree/master/examples/nativeTab
    
* 提升HTML5的性能体验系列之一 避免切页白屏  
http://ask.dcloud.net.cn/article/25

* .git文件过大！删除大文件  
http://www.cnblogs.com/lout/p/6111739.html

* Python爬虫利器三之Xpath语法与lxml库的用法  
http://cuiqingcai.com/2621.html

* 【上拉刷新】
    * 上拉加载（官方文档）  
      http://dev.dcloud.net.cn/mui/pullup/
    * 7、mui下拉加载、上拉刷新(包括分页，vue.js)  
      http://blog.csdn.net/u012453773/article/details/52292816
    * MUI的上拉加载功能实现  
      http://blog.csdn.net/sbt0198/article/details/52215614

* 【回到顶部】解决动态增加内容后调用 scroll().scrollTo(0,0,100) 失效的问题
    * MUI动态加载数据后，scrollToBottom无效的解决方案  
      http://blog.csdn.net/sbt0198/article/details/51755843
    * evalJS和自定义事件，在ios 下不执行？  
      http://ask.dcloud.net.cn/question/11022
    * MUI 官方文档  
      http://dev.dcloud.net.cn/mui/ui/#scroll
    * MUI scroll(区域滚动)问题  
      http://luckylearn.iteye.com/blog/2366710
      
* 【阅读更多】mui mui-scroll 中的 onclick 事件无效  
    * mui的onclick事件无效  
      http://ask.dcloud.net.cn/question/21432
    * mui-scroll与onclick事件冲突  
      http://ask.dcloud.net.cn/question/19170
    * 官网下的 demo MUI ， 为什么 a链接都是失效的  
      http://ask.dcloud.net.cn/question/6444
      
* 【安卓端无法滑动的 bug】ios 中是 div 滑动，原因是安卓中是 webview 滑动，所以 mui('.mui-scroll-wrapper').scroll(); 失效，安卓端不运行相关代码就好。
    * pullRefresh 安卓无法滑动，iOS正常  
      https://ask.dcloud.net.cn/article/12681
      
* 【安卓端无法回到顶部的 bug】原因同上，不同平台采用不同的回到顶端函数。
    * mui.fire srcolltop如何返回到页面的顶部  
      http://ask.dcloud.net.cn/question/3186
      
* 【文章图片自适应屏幕】
    * css控制图片自适应大小  
      http://blog.csdn.net/plutohusky/article/details/6043366
      
* 【即时通讯】
    * mui初级入门教程（五）— 聊聊即时通讯（IM），基于环信 web im SDK（数据绑定，渲染页面）  
      https://segmentfault.com/a/1190000005729743#articleHeader11
    * 新手入门贴：史上最全Web端即时通讯技术原理详解  
      http://www.52im.net/thread-338-1-1.html
    * Web端即时通讯技术盘点：短轮询、Comet、Websocket、SSE  
      http://www.52im.net/thread-336-1-1.html
    * Socket.IO介绍：支持WebSocket、用于WEB端的即时通讯的框架  
      http://www.52im.net/forum.php?mod=viewthread&tid=190&ctid=15

* 【手势滑动】解决选择卡左右滑动切换的问题
	* MUI各种手势事件：滑动、拖动、点击等  
	  http://ask.dcloud.net.cn/article/788
	* mui开发APP中子页面操作父页面的方式总结。  
	  http://blog.csdn.net/well2049/article/details/69499644
	* mui 获取index页面webview的id  
	  http://www.bcty365.com/content-146-5242-1.html  
	* 如何获取上一级webview的id或者对象的方法  
	  http://ask.dcloud.net.cn/question/3903
	* 用JS添加和删除class类名  
	  http://www.cnblogs.com/dealblog/p/6885437.html
 