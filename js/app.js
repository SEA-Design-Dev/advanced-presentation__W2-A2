$(document).ready(function() {
  $('.subnav-link').on('click', function () {

  var temp = $(this).text().toLowerCase();

  if (temp === "brand & logotypes") {
    $('.subnav-link').removeClass('active')
    $('.uidesign').addClass('hidden');
    $('.iconsdesign').addClass('hidden');
    $('.webdesign').addClass('hidden');
    $('.brandsandlogotypes').removeClass('hidden')
    $(this).addClass('active');
  }

  if (temp === "webdesign") {
    $('.subnav-link').removeClass('active')
    $('.uidesign').addClass('hidden');
    $('.iconsdesign').addClass('hidden');
    $('.brandsandlogotypes').addClass('hidden');
    $('.webdesign').removeClass('hidden');
    $(this).addClass('active');
  }

  if (temp === "ui design") {
    $('.subnav-link').removeClass('active')
    $('.brandsandlogotypes').addClass('hidden');
    $('.iconsdesign').addClass('hidden');
    $('.webdesign').addClass('hidden');
    $('.uidesign').removeClass('hidden');
    $(this).addClass('active');
  }

  if (temp === "icons design") {
    $('.subnav-link').removeClass('active')
    $('.uidesign').addClass('hidden');
    $('.brandsandlogotypes').addClass('hidden');
    $('.webdesign').addClass('hidden');
    $('.iconsdesign').removeClass('hidden');
    $(this).addClass('active');
  }

  if (temp === "all works") {
    $('.subnav-link').removeClass('active')
    $('.hidden').removeClass('hidden');
  }

  });
});
