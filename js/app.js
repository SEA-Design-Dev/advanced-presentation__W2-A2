$(document).ready(function() {
  $('.subnav-link').on('click', function (){

  var temp = $(this).text().toLowerCase();
  console.log(temp);

  if (temp === "brand & logotypes") {
    $('.brandandlogotypes').toggleClass('hidden');
  }

  });
});
