$(document).ready(function() {
  $('.subnav-link').on('click', function () {

  var selector = $(this).data('show-tags');

  if (selector === "all") {
    $('.subnav-link').removeClass('active');
    $('[data-tags]').removeClass('hidden');

  }
  else {
    $('.subnav-link').removeClass('active');
    $('[data-tags]').addClass('hidden')

    var filter = $('[data-tags*="' + selector + '"]');

    filter.removeClass('hidden');
    $(this).addClass('active');
  }

  });
});
