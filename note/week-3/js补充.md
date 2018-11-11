#### 关于压缩
网页在上线时需要将代码进行压缩,以
1,**减小文件体积**,**提高网页的解析效率**
2,**提高代码的安全性**
css样式的代码在压缩后可以通过解析还原初始的代码结构(不安全).
但是js代码在进行压缩后,虽然可以通过解析还原初始代码结构,但是却会将函数名进行重新的声明.(相对安全).

#### arguments
arguments指的是函数的实参对象,在不确定函数实参个数的时候可以用arguments代替.
```
function add(){
      var rs = '';
      for (var i = 0; i < arguments.length ; i ++){
            rs += arguments[i];
      }
      return rs;
}
add(1,2,3,4);
```
arguments是一个伪数组,具有数组的属性,但是不具有数组的方法.
##### arguments.callee
arguments.callee指的就是函数本身
在斐波那锲数列中函数fb(n)本身可以用arguments.callee来代替.
```
<script>
      function fb2(n){
            if(n == 1 || n==2){
                  return 1;
            }
             return arguments.callee(n-1)+arguments.callee(n-2);
      }
      alert(fb(4));
</script>
```
#### 自执行函数
函数可以分为1,具名函数
2,匿名函数
3,自执行函数,
自执行函数内可以接收参数.
```
<script>
var age = 20;
(function(n){
      alert('我几年'+n+'岁了');
})(age);
</script>
```
##### 关于自执行函数的应用
```
<ul>
      <li class="li-item">li_1</li>
      <li class="li-item">li_2</li>
      <li class="li-item">li_3</li>
      <li class="li-item">li_4</li>
      <li class="li-item">li_5</li>
</ul>
<script>
      var lis = document.getElementsByClassName('li-item');
      for(var i = 0 ; i < lis.length ; i++){
//绑定这个事件是循环的时候立即执行的,但是函数体内部的代码,是事件被触发(点击)后才能执行的
            lis[i].onclick = (function(n){
                  return function () {
                        console.log('i==>'+n);
                  }
            })(i);
      }
</script>
```
关于this和li[i],for循环中的li[i]是指当循环结束时的i,所以此时的li[i],永远是一个固定的,与数组长度有关,而this制定当前循环的第i个值,是不同的.
#### 添加多个事件
正常情况下在给同一个元素添加多个事件时下一个事件会覆盖上一个事件,多个事件不能同时执行.
**addEventListener**可以给同一个元素添加多个事件并同时执行.
关于addEventListener的参数.参数1,添加什么事件, 2如何去执行事件, 3,是否捕获执行;默认false.(当默认为false时,多事件的执行按照先父类后子类的顺序. 当为true时,则按照冒泡,先子类后父类的顺序执行.)
```
//1,给d1El元素添加了点击事件, 2,执行控制台打印  3,多个事件的执行顺序是父类向子类执行,称为执行.
 d1El.addEventListener('click',function () {
      console.log('123');
 },true);
```
#### 解除绑定
解除绑定必须是具名函数
解除和添加事件时,函数第三个参数是否捕获执行,必须保持一致.
```
<script>
//用具名函数声明要执行的事件.
      function foo() {
                  alert('123!');
            }
            btn1.onclick = function () {
                  box.addEventListener('click', foo , true);
            }
            btn2.onclick = function () {
                  box.removeEventListener('click',foo,true);
            }
</script>
```
#### 关于添加解除事件的兼容
首先IE8不能识别class选择器,在js中声明变量时选使用id选择器,
IE8不支持console.log后台打印.
但是支持alert窗口的弹出.
IE8中事件的绑定必须使用**on**

```
<div class="box"></div>
<button id="btn1">解绑事件</button>
<script>
      var box = document.getElementsByTagName('div')[0];
      var btn1 = document.getElementById('btn1');
      function foo () {
                  alert('abc');
      }
      box.attachEvent('onclick', foo); 
            btn1.onclick = function  () {
                  box.detachEvent('onclick',foo);
      }
</script>
```
<=IE8专用
target.attachEvent(type, listener); 
detachEvent(event,function); 

#### 定时器
setTimeout   延迟执行,只执行一次.
setInterval ,每隔一段时间循环执行,可以一直执行.
