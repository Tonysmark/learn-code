==Note: 学习笔记就在这里写,不同目录用 h2 + 分隔符分开==
==Front end only==

## baidu stylus

#### 对百度搜索结果做出一些修改

#### 特性

- 删除了广告
- 删除了container-left
- 居中显示搜索结果
- 加宽了搜索结果显示
- 导航栏居中，并且小改一下
- 删除了footer

添加了

- 每个搜索结果的container 添加了hover效果，增进交互。
- 移除了字体下划线，增强阅读性。
- 增加AD block  感谢作者pan_cao

## 更新

> 更新20171219 借鉴百度轻主题作者：pan\_cao，主要更新了界面的显示效果，搜索效果还是使用居中

----



## T1

- 給父类加CSS样式 overflow:hidden 就可以清除浮动 -margin 0 auto 就可以让元素居中显示
- 现在问题是如何让两个div在 .container 下左右个占一边呢？
  - 我记得有一种叫做Colum的方法但我就是想不起来了，现在问题是如何自己造一个 Colum
- 现在就按照最简单的和模型来吧
- clear:both 这个我之前一直都没有注意到,一个盒子内部有两个小盒子，小盒子分别左右浮动，由于浮动所以大盒子高度限制无法撑开，这时候就需要再这两个小盒子下创建一个清除浮动的类。

![float浮动产生与清除案例截图](README.assets/1_130305160943_1.png)
![使用clear清除浮动案例截图图文分析](README.assets/1_130305161106_1.png)

----

## T3

#### 实战网格布局

#### 问题记录

1. VScode css无法向外引用库 reset.css必须在本文件夹？
2. grid布局在大方向上，比如说整体框架上做布局结构，小结构并不合适，代码量反而会增多。

> 所以我认为结合grid和Flex最好。

参考实例：

![](http://image.woshipm.com/wp-files/2014/01/32ff9c0df8f81f6744447768999de61d3.jpg)

![](http://image.woshipm.com/wp-files/2014/01/eecfbe03b002efe3fc7d8ea03bf1be573.jpg)

![](http://img.sj33.cn/uploads/allimg/201407/15442W331-0.jpg)

