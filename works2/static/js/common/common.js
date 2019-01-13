(function() {
    $('.nav_s').css({ "width": $(document).width(), "height": $(document).height() })
})()
$('.nav-lines').click(function(e) {
    e.stopPropagation();
    $('.nav_s').slideToggle('fast');
    if ($('body').attr('class') == 're') {
        $('body').removeClass('re');
    } else {
        $('body').addClass('re');
    }
})
$(window).on('click', function() {
    if ($('body').attr('class') == 're') {
        $('body').removeClass('re');
    }
    $('.nav_s').hide('fast');
})
$('.nav_s-link ').click(function(e){
    e.stopPropagation();
    $('.nav_s-link').removeClass('active');
    $(this).addClass('active');
})