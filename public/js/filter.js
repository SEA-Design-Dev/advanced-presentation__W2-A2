'use strict';

$('[data-show-tag]').click(function(event) {
  event.preventDefault();
  var tag = $(event.currentTarget).data('show-tag');
  console.log(tag);
  if(tag == 'all') {
    $('[data-tags]').fadeIn();
    return;
  };
  $('[data-tags]').fadeOut();
  $('[data-tags*="' + tag + '"]').fadeIn();
});
