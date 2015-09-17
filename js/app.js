$(document).ready(function() {
  $('.subnav-link').on('click', function (){

  var temp = $(this).text().toLowerCase();

  if (temp === "brand & logotypes") {
    $('.uidesign').addClass('hidden');
    $('.iconsdesign').addClass('hidden');
    $('.webdesign').addClass('hidden');
    $('.brandsandlogotypes').removeClass('hidden');
  }

  if (temp === "webdesign") {
    $('.uidesign').addClass('hidden');
    $('.iconsdesign').addClass('hidden');
    $('.brandsandlogotypes').addClass('hidden');
    $('.webdesign').removeClass('hidden');
  }

  if (temp === "ui design") {
    $('.brandsandlogotypes').addClass('hidden');
    $('.iconsdesign').addClass('hidden');
    $('.webdesign').addClass('hidden');
    $('.uidesign').removeClass('hidden');
  }

  if (temp === "icons design") {
    $('.uidesign').addClass('hidden');
    $('.brandsandlogotypes').addClass('hidden');
    $('.webdesign').addClass('hidden');
    $('.iconsdesign').removeClass('hidden');
  }

  if (temp === "all works") {
    $('.hidden').removeClass('hidden');
  }

  });
});
