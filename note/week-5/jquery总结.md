# jquery01
#### jquery的理论概念
jQuery 是js对dom操作的一个封装，我们可以通过使用jQuery快速简单的操作dom元素.
换言之,jquery是js的一个子集,并不是所有的js都可以用jquery库(框架).有些还是js的实现还是需要用到原生的js.
它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。
jquery封装好的那些方法功能叫做**API**.
所有的前段框架的基础都是javascript
只要框架能实现，js原生写法都能实现。

#### jquery的基本使用
首先jquery的版本选择,依据项目的需要选择合适的版本,并不是最新的就是最好的.
一般使用开发版本，非压缩版本
1.获取源文件.
2.引入页面.
如果使用了第三方jquery插件（日历、滚动、瀑布流等），必须先引入jquery，再引入该插件。
入口函数;页面加载完后执行.
1.	$(document).ready(function(){});
2.	2.$(function(){});  推荐
选择器,jquery的选择器在css中通用.
js的事件在jquery中不需要加on.

jquery中 的事件处理都是方法 ，原生js的事件处理是属性
Js:  .onclick = function(){ }
Jquery:   click(function(){  });

jQuery的两个变量：$ 和 jQuery
在声明变量时尽量避免使用这两个变量,以免造成冲突
在其他的框架中会存在$变量时,可以使用变量jquery来避免冲突

####  js入口函数和jquery入口函数的区别
1.执行时间
js中window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。
而在jquery中$$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。只加载了dom框架，对于大的图片需要时间，这个不用等.
2.编写个数不同
window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个
$(document).ready()可以同时编写多个，并且都可以得到执行
3.简化写法
js中window.onload没有简化写法
而jquery中$(document).ready(function(){})可以简写成$(function(){});
###### 层级选择器
**>** ,子代选择器,选择所有的子代.
**+** , 选择紧挨着的下一个兄弟元素.
**~**,选择后面的所有兄弟元素.
同时适用于css和jquery.
![Image 1.jpg](https://upload-images.jianshu.io/upload_images/14538814-b0022db79ba2f587.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 属性选择器
![Image 2.jpg](https://upload-images.jianshu.io/upload_images/14538814-be3d6f2ff67cc024.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### 筛选选择器
![Image 3.jpg](https://upload-images.jianshu.io/upload_images/14538814-e75931261be3991d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### mouseover和mouseenter事件的区别
mouseover/mouseout事件，鼠标经过的时候会触发**多次**，每遇到一个子元素就会触发一次。
mouseenter/mouseleave事件，鼠标经过的时候只会触**发一次**

###### Dom对象与JQuery对象的转换
jQuery对象转换成DOM对象:
方式一：$(“#btn”)[0]
方式二：$(“#btn”).get(0)

DOM对象转换成jQuery对象：
$(document) 	-> 把DOM对象转成了jQuery对
varbtn=document.getElementById(“btn”);
btn 	-> $(btn);


# jquery02
#### jquery操作Dom
###### 操作Dom样式
1,**.css()**
获取样式
设置单个属性样式
设置多个属性样式  参数为json对象或者对象形式
###### 属性
attr{};获取属性
jquery中针对标签属性的操作都是使用attr()方法来实现的
获取指定元素( $(选择器)部分 )的指定属性的值
设置属性
removeAttr();
###### 获取值,设置值
text();文本内容
html();
val();输入框内容
###### 操作类
addClass() - 该方法不会移除已存在的 class 属性，仅仅添加一个或多个 class 属性。
removeClass() - 从被选元素删除一个或多个类
toggleClass() - 对被选元素进行添加/删除类的切换操作
hasClass()- 判断是否存在类,如果不写参数
###### Dom元素的查找
![Image 4.jpg](https://upload-images.jianshu.io/upload_images/14538814-0c69362ff56a3dbf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### jquery动画
jQuery提供的一组网页中常见的动画效果，这些动画是标准的、有规律的效果；同时还提供给我们了自定义动画的功能。
###### show方法
![Image 5.jpg](https://upload-images.jianshu.io/upload_images/14538814-d5c94e82a35c25b1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### hide方法
让隐藏的元素显示 ,与show的方法一致
#### 滑入滑出动画
###### 滑入
$(xx).slideDown(speed,callback);
speed选择动画的快慢,callback回调函数选择接下来要执行的函数.
省略参数或者传入不合法的字符串，那么则使用默认值：400毫秒（同样适用于fadeIn/slideDown/slideUp）
###### 滑出
$(xx).slideUp(speed,callback);与slideDown的方法相同.

#### 淡入淡出动画
###### 淡入动画
$(xx).fadeIn(speed, callback);参数方法同上
###### 淡出动画
$(xx).fadeOut(speed,callback);参数方法同上
###### 淡入淡出切换
$(xx).fadeToggle(speed,easing,function(){});
![Image 6.jpg](https://upload-images.jianshu.io/upload_images/14538814-57dd5a01ced2040c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 改变透明度
调节匹配元素的不透明度
$(xx).fadeTo(speed, .5); 
#### 自定义动画
所有能实现动画的属性,必须都只有一个数字类型的值
$(selector).animate(styles,speed,easing,callback)
参数一;要执行动画的元素的css属性
参数二,动画执行的时长
参数三;动画的实现效果(swing,linear等32中可选值)
参数四;回调函数
#### 停止动画
###### stop
停止当前正在执行的动画\
如果多个动画同时作用于一个单位上面，那么多个动画会进入排队。后一个动画的执行必须等前面的执行完毕。
###### stop(stopAll,goToEnd)
第一个参数,stopAll  是否全部停止，默认false 停止队列中所有的动画
第二个参数,goToEnd 是否将在执行的动画,停止在当前动画的最后一个状态.

#### jquery节点操作
###### 创建节点
var node = $(“#box1”).html（“<li>我是li</li>”）；  最常用
###### 添加元素
在元素的最后一个子元素后面添加内容
append()
如果是页面中存在的元素，那么调用append()后，会把这个元素放到相应的目标元素里面去；但是，原来的这个元素，就不存在了。
如果是给多个目标追加元素，那么方法的内部会复制多份这个元素，然后追加到多个目标里面去。
appendTo()
把被添加的内容插入到被选元素子元素的最后面
prepend()
在元素的第一个子元素前面追加内容或节点
$(selector).prepend(node);

after()
在被选元素之后，作为兄弟元素插入内容或节点
$(selector).after(node);
before()
作用：在被选元素之前，作为兄弟元素插入内容或节点
$(selector).before(node);
###### 清空内容
$(selector).empty();清空内容
$(selector).html(“”);推荐
$(selector).remove();  //会把对象也清除掉
###### 复制元素
clone() 方法生成被选元素的副本，包含子节点、文本和属性
$(selector).clone(includeEvents);
参数;可选。布尔值。规定是否复制元素的所有事件处理。默认false，副本中不包含事件处理器。
###### 操作dom表单
prop()
prop() 方法应该用于检索属性值，例如 DOM 属性（如 selectedIndex, tagName, nodeName, nodeType, ownerDocument, defaultChecked, 和 defaultSelected）。
如需检索 HTML 属性，请使用 [attr()]方法代替。
如需移除属性，请使用 [removeProp()]方法。
#### 尺寸位置操作
在jquery中$('').offset().left;指的是距离页面的左边距
$('').offset().top;指的是距离页面的头部距离
而$('').position();则指的是当前盒子距离具有定位的父类的位置
position()属性同时包含了left和top

# jquery03
#### jQuery事件机制
###### 事件的绑定
bind事件绑定,delegate事件绑定,on
简单事件绑定
![Image 7.jpg](https://upload-images.jianshu.io/upload_images/14538814-c01bfe20be089b7f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

bind方式不推荐,在jquery版本1.7以后被on替代
给匹配的元素直接绑定事件 **对于尚未存在的元素无法绑定**
$("p").bind("click mouseenter", function(e){	
});

delegate方式(性能高,支持动态创建元素)
给匹配到的元素绑定事件，对支持动态创建的元素有效 
$(".parentBox").delegate("p", "click", function(){   
});
与前两种方式最大的优势：减少事件绑定次数提高效率，支持动态创建出来的元素绑定事件！

on方式(兼容zepto(移动端类似jQuery的一个库)，建议使用的方式)
jQuery1.7版本后，jQuery用on统一了所有的事件处理的方法
作用：给匹配的元素绑定事件，包括了上面所有绑定事件方式的优点
###### 事件的解绑
unbind()解绑
$(selector).unbind();    // 解绑所有事件
$(selector).unbind(“click”,fn);   //  解绑固定事件
$(selector).unbind(“click”);   //  解除一类事件

undelegate()解绑
$( selector ).undelegate();
$( selector).undelegate( “click” ); 
$( selector).undelegate( “xx”,“click”); 
$( selector).undelegate( “xx”,“click”,fn ); 

off()解绑
$(selector).off();

$(selector).off(“click”);解绑所有代理的click事件，元素本身的事件不会被解绑
$(selector).off( “click”, “xx” ); 

$(selector).off( “click”, “xx” ,fn);

###### 事件的触发
target()触发指定的事件
$(selector).trigger(“click”);

triggerHandler() 方法触发被选元素的指定事件类型。
$(selector).triggerHandler(“click”);

trigger()和triggerHandler()方法的不同
它不会引起事件（比如表单提交）的默认行为（细节，开发并不在意）
.trigger() 会操作 jQuery 对象匹配的所有元素，而 .triggerHandler() 只影响第一个匹配元素。
由 .triggerHandler() 创建的事件不会在 DOM 树中冒泡；如果目标元素不直接处理它们，则不会发生任何事情。
该方法的返回的是事件处理函数的返回值，而不是具有可链性的 jQuery 对象。此外，如果没有处理程序被触发，则这个方法返回 undefined。

#### jquery事件对象介绍
event.data ;传递给事件处理程序的额外数据
event.currentTarget ;等同于this，当前DOM对象\
event.pageX ;鼠标相对于**文档**左部边缘的位置
event.target ;触发事件源，不一定===this
event.stopPropagation()；阻止事件冒泡
event.preventDefault(); 阻止默认行为（例如，当点击提交按钮时阻止对表单的提交）
event.type ;事件类型：click，dbclick…
event.which ;
![Image 8.jpg](https://upload-images.jianshu.io/upload_images/14538814-99f379096172f767.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
event.keyCode;键盘按键代码(返回相应键盘按键的AscII值.)
###### 隐式迭代
隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。
如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。

###### each方法
大部分情况下是不需要使用each方法的，因为jQuery的隐式迭代特性。
**如果要对每个元素做不同的处理，这时候就用到了each方法**
遍历jQuery对象集合，为每个匹配的元素执行一个函数$(selector).each(function(index,element){});
Element是一个 js对象，需要转换成jquery对象
###### 多库共存
此处多库共存指的是：jQuery占用了$ 和jQuery这两个变量。当在同一个页面中引用了jQuery这个js库，并且引用的其他库（或者其他版本的jQuery库）中也用到了$或者jQuery这两个变量，那么，要保证每个库都能正常使用，这时候就有了多库共存的问题
解决方法
$.noConflict();让jQuery释放对$的控制权，让其他库能够使用$符号，达到多库共存的目的。此后，只能使用jQuery来调用jQuery提供的方法

# jquery插件的使用
1.	下载插件库
2.	在页面引入插件的css或者字体图片等（如果有的话）
3.	在页面引入jQuery.js
4.	在页面引入插件的js文件（core）
5.	在页面通过插件的api初始化插件 即可使用（通过查看相应的API）
常用的插件有  **日历插件**   **滚动插件**    **表格插件**    **报表插件echar**   **树行插件**  **富文本插件**





















