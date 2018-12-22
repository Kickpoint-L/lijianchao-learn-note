resizeFont();
//当屏幕宽度发生变化的时候 触发
window.onresize = function(){
	resizeFont();
}
// 按照设计稿的1/10 ; 设计稿750px ==>  75px;
// 1.求设备的html根节点的基数(宽度的1/10) 在750px的设备上开发
function resizeFont() {
	document.documentElement.style.fontSize = window.innerWidth/10+'px';
}
// $('li').each(function(index,el){
//     $(el).click(function(){
//       console.log(index);
//       $('li').children().removeClass('active');
//       $(this).children().addClass('active');
      
//     })
// })
console.log($('li').children(2).offset().top);
$('.header-list').click(function(){
  $('.nav').slideToggle('fast');
})
$('#about-msg-ui').click(function(){
  $('.msg-ui').show('fast');
  $('body').css('overflow','hidden');
})
$('#about-msg-h5').click(function(){
  $('.msg-h5').show('fast');
  $('body').css('overflow','hidden');
})
$('.msg-quit').click(function(){
  $('body').css('overflow','auto');
  $('.msg-ui').hide('fast');
  $('.msg-h5').hide('fast');
})

// li.on('click',function(){
//   var id = $(this).data('target');
//   $('#'+id).xxx
//   //拿id
//   $(this).attr('id')
// })

var scrollUp=document.documentElement.scrollTop;
function gd(el,nav){
  this.li = el;
  this.nav = nav;
  this.init();
}
gd.prototype ={
  init:function(){
    this.nextSect(this);
  },
  nextSect:function(that){
    this.li.each(function(index,el){
        $(el).click(function(){
          that.li.children().removeClass('active');
          $(this).children().addClass('active');
          that.nav.css('display','none');
          var abcd = $(this).children().data('target');
          // document.documentElement.scrollTop = $('#'+abcd).offset().top;
          $('html,body').animate({
            scrollTop:($('#'+abcd).offset().top)
          },1000);

          
        })
    })
  }
}
new gd($('li'),$('.nav'));

$('.footer-up').click(function(){
  $('html,body').animate({
    scrollTop:'0px'
  },1000)
})




var swiper1 = new Swiper('#swiper1', {
     slidesPerView:'auto',
     slidesPerColumn:5,
     spaceBetween: 15,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     }
   });
var swiper2 = new Swiper('#swiper2', {
     slidesPerView:'auto',
     slidesPerColumn:1,
     spaceBetween: 20,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     }
   });