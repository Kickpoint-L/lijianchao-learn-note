var swiper1 = new Swiper('#swiper1', {
  autoplay:true,//等同于以下设置
  /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
});
var swiper2 = new Swiper('#swiper2', {
	autoplay:true,
  slidesPerView:3,
  // slidesPerColumn:3,
  // spaceBetween: 30,

  observer:true,//修改swiper自己或子元素时，自动初始化swiper 
  observeParents:false,//修改swiper的父元素时，自动初始化swiper 
  onSlideChangeEnd: function(swiper){ 
  　　swiper.update();  
  　　mySwiper.startAutoplay();
  　　mySwiper.reLoop();  
  },
  pagination: {
     el: '.swiper-pagination',
  },
  navigation: {
   	nextEl: '.swiper-button-next',
   	prevEl: '.swiper-button-prev',
  },
});


//地图标点动画
// dotts($('.dotts'),500)
// dotts($('.dotts_s'),300)
function dotts(el,jg){
  setInterval(function(){
    var hasFade = el.hasClass('fadeIn');
    if (hasFade) {
      el.removeClass('fadeIn')
     }
     if (!hasFade) {
        el.addClass('animated fadeIn')
     }
  },jg)
}

$(window).scroll(function(){
  //公众号动画
  ff($('.gzh-phone'),$('.dotts-gzh'),'flash')
  ff($('.gzh-phone'),$('.dott-gzh1'),'flash')
  ff($('.gzh-phone'),$('.gzh-show-weixin'),'slideInLeft')
  ff($('.gzh-phone'),$('.gzh-show-mobile'),'fadeInDown')
  ff($('.gzh-phone'),$('.gzh-show-dt'),'zoomIn')
  ff($('.gzh-phone'),$('.gzh-phone'),'fadeInUp')

//网站动画
  ff($('.wangzhan-show-mac'),$('.wangzhan-show-web'),'fadeInDown')
  ff($('.wangzhan-show-mac'),$('.wangzhan-show-dt'),'zoomIn')
  ff($('.wangzhan-show-mac'),$('.wangzhan-show-mac'),'fadeInRight')
  ff($('.wangzhan-show-mac'),$('.dotts-wz'),'flash')
  ff($('.wangzhan-show-mac'),$('.dott-wz1'),'flash')

//关于我们动画
  ff($('.about-bg'),$('.about-bg'),'bounceInRight')
})
function ff(obj,el,class1){
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var clientHeight = document.documentElement.clientHeight;
  var phoneCha =scrollTop;
  var phoneX =obj.offset().top;
  if (scrollTop < phoneX-clientHeight) {
     el.removeClass(class1)
  }else if (scrollTop>phoneX-300 && scrollTop < (phoneX+obj.height())-400) {
    el.addClass('animated '+class1+'')
  }else if(scrollTop > (phoneX+obj.height())){
    el.removeClass(class1)
  }
}

//轮播数据动态加载
// $.ajax({
//   type:'get',
//   url:'/anli.json',
//   success:function(rs){
//     add(rs,$('.swiper-slide'))
//   }
// })
var zc = $('.anli-header-list').length;
add(anli,$('#wrapper2'),0);

$('.anli-header-list').click(function(){
  $('#wrapper2').empty()
  $('.anli-header-link').removeClass('active')
  $(this).children().addClass('active')
  var xb = $(this).index();
  add(anli,$('#wrapper2'),xb)
  console.log(xb);
})
function add(rs,el,h){
  var shuJu = rs.allAnli;
  var str = '';
  var anli_i = 0;
    if (h-1<0) {
        anli_i = zc-1;
        console.log(anli_i);
    }else{
      anli_i = h;
      console.log(anli_i);
    }
    for (var i = 0; i<anli_i; i++) {
      var detail = shuJu[i].show
      console.log(detail);
      for(var j = 0; j<detail.length; j++){
        str += `<div class="swiper-slide">
                  <a href="javaScript:;" class="anli-show">
                    <img src="`+detail[j].img+`" alt="" class="anli-bg">
                    <div class="instroduce-text">
                      <span class="instroduce-title big">`+detail[j].title+`</span>
                      <span class="instroduce-title">`+detail[j].text+`</span>
                    </div>
                  </a>
                </div>`
      }
    }
    el.append(str);
}

