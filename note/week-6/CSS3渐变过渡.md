#### 边框
###### 边框图片
border-image 属性是一个简写属性，用于设置以下属性：
•	border-image-source  图片
•	border-image-slice	图片边框向内偏移量
•	border-image-width	边框宽度
•	border-image-outset  边框图像区域超出边框的量
•	border-image-repeat   图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。
可以通过一些特定的软件实现想要的效果![Image 12.jpg](https://upload-images.jianshu.io/upload_images/14538814-61fc1c42191ddd47.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 渐变
###### 线性渐变
linear-gradient( 向下/向上/向左/向右/对角方向)
语法:background: linear-gradient(direction, color-stop1, color-stop2, ...);
参数:方向,开始的颜色,结束的颜色.
标准模式下,方向的参数是需要带 to的,比如to right
但是在兼容模式下不需要带to,并且方向与标准模式下相反
可以设置角度但同时,方向属性就会失效
```
<style>
      background: linear-gradient(to right bottom,red 60%,green,yellow,purple);
      background: linear-gradient(18deg,red 60%,green,yellow,purple);
//兼容模式
      background: -webkit-linear-gradient(right bottom,red 60%,green,yellow,purple);
</style>
```
###### 颜色百分比
这个颜色从开始位置起到百分之多少开始,第一个色值之前的用第一个色值填充,最后一个色值之后的用最后一个色值填充,中间填充两个颜色的渐变.
###### 重复渐变![Image 13.jpg](https://upload-images.jianshu.io/upload_images/14538814-c5bd2733345c4213.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
其中百分比的的意思是,10%事前面的颜色.后面20%中有10%是渐变的颜色,剩下10%是后面的颜色.
###### 径向渐变
radial-gradient(由中心向四周渐变),
语法:background: radial-gradient(center, shape size, start-color, ..., last-color);
参数意思:渐变中心位置,shape(渐变的形状.默认值为circle圆形 或 ellipse椭圆形);
size:渐变的大小,四个值,closest-side,最近边.;closest-corner,最近角;farthest-side,最远边;farthest-corner,最远角;
#### 背景
背景在CSS3中也得到很大程度的增强，比如背景图片尺寸、背景裁切区域、背景定位参照点、多重背景等
###### 1.background-size
width height 直接设置宽高 百分比
cover会自动调整缩放比例，保证图片始终填充满背景区域，如有溢出部分则会被隐藏。
整个背景图片完整显示在背景区域.![Image 14.jpg](https://upload-images.jianshu.io/upload_images/14538814-e3f0a2f0fa9992ca.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**contain**会自动调整缩放比例，保证图片始终完整显示在背景区域。但是会有留白;![Image 15.jpg](https://upload-images.jianshu.io/upload_images/14538814-59f7e6ba34f292a7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 2.background-origin(设置背景定位原点)
border-box以边框做为参考原点；
padding-box,以内边距作为参考原点
content-box,以内容作为参考原点
与background-size结合使用
###### 3.background-clip(设置背景图片剪裁)
border-box,以边框内作为背景进行剪裁
padding-box,以内边距作为背景进行剪裁
content-box,以内容作为背景进行剪裁
###### 4.以逗号分隔可以设置多背景,可用于自适应局![Image 16.jpg](https://upload-images.jianshu.io/upload_images/14538814-462d6883a685cb15.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 过渡(transition)
在原本的样式中放入过渡的初始状态,在被触发的事件中放入过渡的最终状态.
补间动画
transition:param1  param2 
参数1;要过渡的属性
参数2,过渡需要的时间;
**过渡**需要被触发,而animate动画则不需要被触发可以立即执行
特点：当前元素只要有“属性”发生变化时，可以平滑的进行过渡。![Image 17.jpg](https://upload-images.jianshu.io/upload_images/14538814-5c9574d4c035dd50.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
语法;transition: all .4s cubic-bezier(.59,-1.07,1,1.75)  1s;
transition-property;过渡的属性,一般为all,
transition-timing-funcrion;过度的曲线(贝塞尔曲线)linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);可以在官网链接贝塞尔曲线中找到想要的效果,并获取对应的贝塞尔曲线值.
transition-delay;过渡的延迟执行时间,可以不写
#### 2D转换
写在css样式中,效果写在事件中
在css3 当中，通过transform(变形) 来实现2d 或者3d 转换,其中2d 有，缩放，移动，旋转。
###### transform-origin

###### scale缩放
缩放 scale(x, y) 可以对元素进行水平和垂直方向的缩放，x、y的取值可为小数，**不可为负值**；
###### translate移动	
移动 translate(x, y) 可以改变元素的位置，x、y可为负值；
###### rotate旋转
旋转 rotate(deg) 可以对元素进行旋转，正值为顺时针，负值为逆时针；
transfrom-origin,旋转中心







