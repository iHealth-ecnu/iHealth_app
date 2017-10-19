## iHealth
iHealth 的 demo 示例程序，是一个 MUI 实现的 webapp。

### 开发笔记
* 底部选择栏 单击跳转到新页面 不能用 <a href='...'> 的形式，也不能用 js 绑定 onclick 事件的方式。需要用绑定 id ，并在 init() 下面实现 mui.plusReady() 函数即可。


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