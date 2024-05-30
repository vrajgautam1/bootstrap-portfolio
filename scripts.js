$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('#navbar').addClass('fixed');
          }
          else {
              $('#navbar').removeClass('fixed');
          }
     });
 });


$(function() {
    $('.selector').animatedHeadline({
        animationType: 'rotate-1'
    });
})