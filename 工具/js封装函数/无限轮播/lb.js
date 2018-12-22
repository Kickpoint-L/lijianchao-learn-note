function lb(){
	var timer = null;
	var timer2 = null; 
	var count = 0;
	//封装当鼠标进入,移出
	bannerEl.onmouseenter = function(){
		clearInterval(timer2);
	}
	bannerEl.onmouseleave = function(){
		autoplay();
	}
	//封装无限轮播的函数
	function autoplay(){
		timer2 = setInterval(function(){
			count ++;
			// console.log(count);
			go(count);
		},2000)
	}
	//封装左右移动的函数
	function goNext(isRight){
		if (true) {
			count --;
		}else{
			count ++;
		}
		go(count);
	}
	//封装点击的原点函数 动态插入,上面要调用
	function addDotts(b){
		var str= '';
		for (var i = 0; i<imgsEl.children.length-1; i++) {
			str += '<li class="dott-item '+(i==0?'active':' ')+'" onclick="go('+i+');"><a href="javascript:;"></a></li>'
		}
		b.innerHTML = str;
	}
	//封装中心函数go-next(内部点击原点要获取go的count,之后再有原点函数调用)
	function go(count){
		window.count = count;
		if (count == imgsEl.children.length ) {
			window.count = 1;
			imgsEl.style.left = '0';
		}
		if (count<0) {
			window.count = imgsEl.children.length-2;
			imgsEl.style.left = -1*(imgsEl.children.length-1)*liw+'px';
		}
		var target = -1*window.count*liw;
		yd(window.count);
		ys(imgsEl,target);

		//原点对应的样式
		function yd(a){
			if (a == imgsEl.children.length-1) {
				a = 0;
			}
			for (var i = 0; i<dottsEl.children.length; i++) {
				console.log('i==>'+i)
				delClass(dottsEl.children[i],'active');
			}
			addClass(dottsEl.children[a],'active');
		}
	}
	//封装原始的缓动函数
	function ys(el,target){
		clearInterval(timer);
		timer = setInterval(function(){
			var leader = el.offsetLeft;
			var step = (target-leader)/10;
			if (step<1&&step>0) {
				step = 1;
			}else if(step<0&&step>-1){
				step = -1;
			}
			if (leader == target) {
				el.style.left = target+'px';
				clearInterval(timer);
			}else{
				el.style.left = (leader+step)+'px';
			}
		},17)
	}
}
	
