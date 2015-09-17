// from http://unslider.com/
'use strict';
$(function() {
  $('.img-carousel').unslider({
    speed: 500,              //  The speed to animate each slide
    delay: 3000,             //  The delay between slide animations
    keys: true,              //  Enable keyboard arrow shortcuts
    dots: false             //  Display dot navigation - done manually below
  });
  var slidey = $('.img-carousel').unslider(),
    data = slidey.data('unslider');
    data.dots();

  $('.fig-carousel').unslider({
    speed: 500,              //  The speed to animate each slide
    delay: 3000,             //  The delay between slide animations
    keys: true,              //  Enable keyboard arrow shortcuts
    dots: false             //  Display dot navigation - done manually below
  });
  var slidey2 = $('.fig-carousel').unslider(),
    data = slidey2.data('unslider');
    data.dots();
});