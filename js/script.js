$(window).scroll(function(){
    var menubar = $('.menu-bar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) menubar.addClass('fixed');
    else menubar.removeClass('fixed');
  });