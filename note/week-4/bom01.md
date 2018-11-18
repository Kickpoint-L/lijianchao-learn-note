####  offset家族
主要成员offsetLeft//offsetTop//offsetWidth//offsetHeight//offsetParent
offsetWidth//offsetHeight 两位成员的主要责任是获取自身的宽高,此处的宽高包含了border.
offsetParent// 这位成员的责任是找到他自身具有**定位属性**的父类元素,如果没有则取body.
offsetLeft//offsetTop获取其自身距离具有定位属性的父类的左边距和上部边距.
**offsetLeft 从父亲的padding 开始算,父亲的border 不算。**
offset家族只能用于获取属性,并不能直接赋值.(**只读**).
获取的值为**number**类型;
xx.style.left可以用来设置元素的值.值为字符串.

#### scroll家族
scrollWidth//scrollHeight 不包含border,但是包含内容和padding.
scrollLeft//scrollTop .表示自身被卷进去的部分.兼容写法
**var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;**
scroll家族与offset家族不同可以被**赋值**(**document.documentElement.top**)
###### onscroll事件
监听浏览器的滚动,当浏览器滚动时会**触动**onscroll事件.(window.onscroll)
###### window.scrollTo
屏幕跳转,window.scrollTo(x,y)浏览器跳转到指定的x,y,轴

**title、body、head、html标签的获取**
document.documentElement==>它表示文档的**html**标签， 也就是说，基本结构当中的html标签并不是通过document.html 去访问的，而是document.documentElement 。
document.title==>**文档的标题(title)**
document.head==>**文档的头标签(head)**
document.body==>**文档的body标签(body)**




