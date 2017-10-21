## iHealth
iHealth 的 demo 示例程序，是一个 MUI 实现的 webapp。


### 开发注意事项
* 底部选择栏 单击跳转到新页面 不能用 ```<a href='...'>``` 的形式，也不能用 js 绑定 onclick 事件的方式。需要用绑定 id ，并在 init() 下面实现 mui.plusReady() 函数即可。


### 参考资料
* mui初级入门教程（五）— 聊聊即时通讯（IM），基于环信 web im SDK（数据绑定，渲染页面）  
https://segmentfault.com/a/1190000005729743#articleHeader11

* MUI从入门到精通系列汇总  
http://ask.dcloud.net.cn/article/786

* mui官方文档  
http://dev.dcloud.net.cn/mui/ui/

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