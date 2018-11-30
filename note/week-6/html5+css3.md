HTML5在语法规范上也做了比较大的调整，去除了许多冗余的内容，书写规则更加简洁、清晰。
特点;更简洁,更宽松
语义化标签;对于整个页面来说,需要区分页面的布局,用不同的标签给页面的某一部分进行标注,可以使得页面结构变得清晰,但是页面的结构复杂,对于现有的语义化标签并不能完全覆盖,.所以还是class选择器更加的灵活;
###### 新增的语义化标签元素
Section、article、aside、header、hgroup、footer、nav、figure
###### 新增的'花样'标签元素
video、audio、canvas、embed、mark、progress、meter、time、ruby、rt、rp、wbr、command、details、datalist、datagrid、keygen、output、source、menu
###### 新增的input类型
email、url、number、range、color
**html是页面的骨架,尽量不要把样式在里面,样式由css实现**
###### 新增的全局属性
**contentEditable**属性  单独某一个标签的属性 可以使内容能被编辑
**designMode**属性（这个在js中进行使用，让页面中所有的元素开启可编辑模式） 让页面所有的标签都可以被编辑 比如div、p、h1等等.
**hidden**属性
**novalidate**关闭表单验证;
![Image 1.jpg](https://upload-images.jianshu.io/upload_images/14538814-65f09ab87cf9df8c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**tabindex**属性  (让标签获取到焦点)
###### cssHack兼容
在不支持HTML5新标签的浏览器里，会将这些新的标签解析成行内元素(inline)对待，所以我们只需要将其转换成块元素(block)即可使用
这个语法只有在ie才能识别 刚好实现了在ie中引入 转换的库 的需求![Image 4.jpg](https://upload-images.jianshu.io/upload_images/14538814-115cc2e8f6eff2af.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

针对ie浏览器的特定版本 制定特定样式  ![Image 5.jpg](https://upload-images.jianshu.io/upload_images/14538814-a49cd7a29354f0e4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 表单
###### 输入类型
email 输入email格式
tel 手机号码  
url 只能输入url格式(图片)
number 只能输入数字
search 搜索框
range 范围 滑动条
color 拾色器
time	时间
date 日期 不是绝对的
--datetime 时间日期(移动支持)
month 月份
week 星期
###### 表单属性
placeholder 占位符
autofocus 获取焦点
multiple 文件上传多选或多个邮箱地址  
autocomplete 自动完成，用于表单元素，也可用于表单自身(on/off)
form 指定表单项属于哪个form，处理复杂表单时会需要 一般一个页面只有一个form
novalidate 关闭验证，可用于<form>标签
required 必填项
pattern 正则表达式 验证表单
###### 表单事件
oninput 用户输入时触发,一般用于移动端字数统计
oninvalid 验证不通过时触发
#### 多媒体
###### 音频
HTML5通过audio标签解决音频播放问题
autoplay 自动播放
controls 是否默认显示播放控件
loop 循环播放
preload 预加载 同时设置autoplay时此属性失效
由于版权等原因，不同的浏览器可支持播放的格式是不一样的![Image 6.jpg](https://upload-images.jianshu.io/upload_images/14538814-214cccf38abe81f7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 视频
html5可以通过video标签解决视频播放问题
同样，通过附加属性可以更友好的控制视频的播放
autoplay 自动播放
controls 是否显示默认播放控件
loop 循环播放
preload 预加载，同时设置了autoplay，此属性将失效
width 设置播放窗口宽度
height 设置播放窗口的高度
由于版权等原因，不同的浏览器可支持播放的格式是不一样的![Image 7.jpg](https://upload-images.jianshu.io/upload_images/14538814-e3eb20b49b484c9d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### Dom扩展
###### 获取元素
html5新选择器
document.querySelector('div'),选中的第一个
document.querySelector('select'),选中一个集合

###### 类名操作
Node.classList.add('class') 添加class
Node.classList.remove('class') 移除class
Node.classList.toggle('class') 切换class，有则移除，无则添加
Node.classList.contains('class') 检测是否存在class
###### 自定义属性
自定义属性 可以把一些数据作为标签的属性存储到标签中
格式为data-info="我是自定义属性",通过Node.dataset['info'] 我们便可以获取到自定义的属性值。
需要以驼峰形式才能获取
data-my-name="mm"，获取Node.dataset['myName']












