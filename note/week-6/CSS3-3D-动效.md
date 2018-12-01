#### 透视perspective(景深)
电脑显示屏是一个2D平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现，通过透视可以实现此目的。
眼睛与屏幕的距离,通过设置大小改变效果.
perspective有两种写法
1.作为父类,作用于3D转换的所有子元素,使画面变得更加具有立体效果
2.作为transform的一个属性,作用于自身
perspective-origin;视角;(通过改变视角,改变效果)
###### transform-style
3D呈现:设置内嵌的元素在 3D 空间如何呈现，这些子元素必须为**转换原素**。
flat：所有子元素在 2D 平面呈现
transform-style:perspective-3d;开启3D舞台效果
backface-visibility：visible/ hidden,背景是否隐藏
#### 动画
###### 必要元素
1.通过@keyframes指定动画序列；
2.通过百分比将动画序列分割成多个节点；
3.在各节点中分别定义各属性
4.通过animation将动画应用于相应元素；
###### 必要属性
1. Animation-name:动画名称(必填);
2\. Animation-duration;动画持续时间
3. animation-timing-function.动画执行的曲线(贝塞尔曲线);
4. animation-delay  ;延迟执行时间
5. animation-iteration-count,重复的次数(比较常用infinite);
6.animation-direction;动画是否重置后开始播放
alternate动画直接从上一次停止的位置开始执行(倒着来)
normal.动画从第二个状态,直接跳到从0开始;
7.animation-play-state;播放状态
running 播放 和paused 暂停 
8.animation-fill-mode;动画执行完毕后![Image 18.jpg](https://upload-images.jianshu.io/upload_images/14538814-f6e68b9ce253308a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**动画的属性 除了name duration 其余都可以不写**
###### skew![Image 19.jpg](https://upload-images.jianshu.io/upload_images/14538814-5ffbbe047be5f715.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)![Image 20.jpg](https://upload-images.jianshu.io/upload_images/14538814-4b5cae78bb4e0e4f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### animate.css
监听某一元素的事件
animationstart - CSS 动画开始后触发
animationiteration - CSS 动画重复播放时触发
animationend - CSS 动画结束后触发
#### 字体
目前主要的字体格式有.ttf/.otf/.woff/.eot/.svg/.
推荐http://www.zhaozi.cn/、http://www.youziku.com/  查找更多中文字体
类似插件的使用方法![Image 21.jpg](https://upload-images.jianshu.io/upload_images/14538814-ad593cf1f64a3569.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### js监听滚轮事件
ie支持window.attachEvent添加监听事件，非ie用window.addEventListener添加监听事件
存在兼容问题![Image 22.jpg](https://upload-images.jianshu.io/upload_images/14538814-cdb9e4038fe0977e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)






