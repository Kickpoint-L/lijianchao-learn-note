#### 关于dom
dom元素指的是页面的标签,通过任意一个dom元素的关系可以找到当前页面其他任意的一个dom.它将网页中的各个元素都看作一个个对象，从而使网页中的元素也可以被计算机语言(js)获取或者编辑。 例如Javascript就可以利用HTML DOM动态地修改网页。
node节点指的是页面的任意元素,标签 换行符 注释 空格  属性 
我们可以通过js可以操作dom元素,包括dom元素的属性和内容.
#### 关于api
api:应用程序编程接口,是一些预先定义的函数,程序员可以通过api在不访问源代码的情况下控制window各个部件的外观和行为.api函数服务的对象是window应用程序.

#### dom元素的获取方式
通过id属性获取
```
var p1 = document.getElementById('p1');
 ```
通过标签获取
```
var h2 = document.getElementsByTagName('h2');
```
通过class属性获取
 ```
var h1 = document.getElementsByClassName('title');	
```
通过class选中是最常用的方式!但是 ie6,7,8不支持! 而且ie8不支持console.log
而ID属性一般在js中使用
同伙标签和class属性选中的都为**数组**形式.
#### 节点的获取方式
1,父节点的获取
```
var 父节点 = 子节点.parentNode;
//这里的parentNode不存在兼容问题,适用于chrome和IE浏览器
```
在js中操作css中的属性,一般会把**abc-xx**转换为**abcXx**的驼峰命名法

2,兄弟节点的获取
存在兼容性问题,
**nextSibling** **previousSibling**适用于IE浏览器,但是在chrome浏览器中的节点还包括,空格,换行符,注释等
**nextElementSibling** **previousElementSibling**适用于chrome,但是同样在IE浏览器中为undefined.
兼容的写法
```
var p1 = p2.nextElementSibling || p2.nextSibling;
//此时的顺序应严格按照先庶出后嫡出
```
3,单个孩子节点的获取
存在兼容性问题
**firstChild** **lastChild**,第一个和最后一个节点,在IE浏览器中适用,在谷歌浏览器中包含空格,换行,和注释.
**firstElementChild** **lastElementChild**,在chrome浏览器中适用,在IE中存在兼容性问题.

4,孩子节点的获取
存在兼容性问题
返回子元素的集合,伪数组(包含数组的属性length,但是不能调用数组的方法如sort.)
获取所有孩子节点
**childNodes**嫡出,适用于IE浏览器,火狐 谷歌等高本版会把换行也看做是子节点,存在兼容性问题.
**children**庶出,只返回HTML节点，甚至不返回文本节点,但它和innerHTML方法一样，得到了几乎所有浏览器的支持。在 IE浏览器中包含注释节点.
nodeType是标签元素的属性 可以判断节点类型
**当nodeType == 1是,表示标签节点.**
#### 节点的增删改查(c u r d)
create,update,read,delete.
创建节点
```
var pEle = document.createElement('p');
pEle.innerText = '欢迎来到不凡学院';
//节点创建之后需要插入,否则没有意义
var img2 = document.createElement('img');
img2.src = 'img/a.jpg';
//通过父节点插入
父节点.appendChild(pEle);

//父节点.insertBefore(要插入的节点，参考节点)；
boxDiv.insertBefore(img2,pEle);
//同一节点不能重复插入.
```
删除节点
父节点.removeChild（子节点）;
```
img2.parentNode.removeChild(img2);
//通过父节点删除自己.
```
克隆节点
```
//克隆标签节点 如果没有传递true则为浅克隆.
var newBox = boxDiv.cloneNode(true);
//单clone不插入是没有效果的
document.body.appendChild(newBox);
```
#### 获取节点的属性
获取：getAttribute(属性名称)
设置：setAttribute(属性名称, 值)
删除：removeAttribute(属性名称)

#### 关于页面的操作
```
btn1.onclick = function(){
	//input表单的值 必须通过  value属性添加
	inputEl.value = Math.floor(Math.random()*20);
}
btn2.onclick = function(){
	var html = '<h1>欢迎来到不凡学院</h1>';
	var txt = '今天天气不错啊!!';
	// 一般使用这种,
	pEl1.innerText = html;
}
btn3.onclick = function(){
	var txt = '今天天气不错啊!!';
	var html = '<h1>欢迎来到不凡学院</h1>';
	//跟innerText相同
	pEl1.textContent = html;
}
btn4.onclick = function(){
	var html = '<h1>欢迎来到不凡学院</h1>';
	box.innerHTML = html;
}
// 动态拼接页面用的很多
btn5.onclick = function(){
	var html = '<img src="img/fbb.jpg"><p>欢迎来到不凡学院</p><img src="img/fbb.jpg">';
	box2.innerHTML = html;
}
```
插入textContent,innerText的为**纯文本**的形式.
插入innerHTML插入的样式可以进行**解析**后显示.
#### 关于函数的封装
封装的函数只有在调用之后才有意义,
函数的调用形式有
1.自执行函数
 (function (){
})();
2.通过返回值
function (){
var rs = '';
return rs;
}
3.通过给封装函数传入一个值
add(x,y);
function add(el,abc){
}