CSS3是CSS2的“进化”版本，在CSS2基础上，增强或新增了许多特性， 弥补了CSS2的众多不足之处，使得Web开发变得更为高效和便捷。
###### 传统网站与互联网网站的区别
1.没有动画.(依靠flash/gif图)
2.移动端的兼容.(响应式/需专门针对移动端进行开发)
3.传统网站过多的使用小icon图片.而现在的网站大多使用图片字体库,比如font-awesome
4.flash.大多数动效通过flash实现
###### CSS3新增的内容
1.很容易的实现动画效果
2.支持设备类型识别,可以针对不同的设备进行样式适配
3.可以使用图形字体替代小的icon图标,更加的灵活.简洁,页面速度加载更快
4.CSS3中新增的动效可以摒弃之前的flash.更加的自由.
###### 关于CSS3的现状
1.浏览器支持程度差,部分属性需要加特定的前缀.
2.移动端支持优于PC端 （移动端每年都会更新新款，移动端的浏览器厂商提供的一般都是最新标准）
3.不断改进中 （现在问题基本都出在IE8,工作中看工作需求是否需要兼容 IE8）
4.应用相对广泛  所有的手机端，尤其是微信分析的小场景小广告等都是（除了直接用视频）css3
#### 基础知识
###### 伪类选择器
CSS3新增了许多灵活查找元素的方法，极大的提高了查找元素的效率和精准度。CSS3选择器与jQuery中所提供的绝大部分选择器兼容。
:link、:active、:visited、:hover
顺序
 love heat![Image 11.jpg](https://upload-images.jianshu.io/upload_images/14538814-22212a7306408c16.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**结构伪类**
重点通过E来确定元素的父元素。
E:first-child第一个子元素
E:last-child最后一个子元素
E:nth-child(n) 第n个子元素
E:nth-last-child(n) 同E:nth-child(n) 相似，只是倒着计算![Image 8.jpg](https://upload-images.jianshu.io/upload_images/14538814-1c45cbb7357a3ce9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**目标伪类**
E:target 结合锚点进行使用，处于当前锚点的元素会被选中；
###### 伪元素选择器
E::before、E::after
是行内元素,需要转换为块状元素
E:after、E:before 在旧版本里是伪类，在新版本里是伪元素，新版本下E:after、E:before会被自动识别为E::after、E::before，按伪元素来对待，这样做的目的是用来做兼容处理。
***伪标签在js中不能被选中***.
E::first-letter文本的第一个字母或字；
E::first-line 文本第一行；  
E::selection 可改变选中文本的样式；
After和before是在标签内容后面和前面添加内容，但是一般不存在通过css添加内容的情况，所以一般写成content’’，添加背景图片 做小特效。
###### 颜色
rgba();只是单纯的改变颜色,适用于一般元素的透明
opacity:;背景和内容都会改变颜色,适用于遮罩层的设置
transparent:完全透明(适用于三角形)
###### 属性选择器
![Image 9.jpg](https://upload-images.jianshu.io/upload_images/14538814-e751992153e4c086.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 阴影
box-shadow: h-shadow v-shadow blur spread color inset;
参数表示,x轴,y轴的偏移量,模糊半径,扩展范围,颜色.inset(不必要,表示盒子在阴影内部偏移模糊)
模糊半径越大越模糊.
#### CSS3盒子模型
CSS3中可以通过box-sizing 来指定盒模型
 content-box:对象的实际宽度等于设置的width值和border、padding之和
border-box： 对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度

