'use strict';

$('.map-embed ul').hide();

$('.map-embed').mouseenter(function () {
  $('.map-embed ul').slideDown('slow', function() {
    $(this).focus();
  });
});

$('.map-embed').mouseleave(function () {
  $('.map-embed ul').slideUp('slow', function() {
    $(this).focus();
  });
});

