$(function () {
$(".graph").click(function() {
  $( 'progress' ).toggleClass("graphShow graphHide")
})
   $('.all').click(function (e){
      e.preventDefault();
     if ($(".allAll").is(":hidden")){
       $(".allAll").slideDown("slow");
     } else{
      $(".allAll").hide('slow');
     }
   });
   $('.web').click(function (e){
      e.preventDefault();
     if ($(".notWeb").is(":hidden")){
       $(".notWeb").slideDown("slow");
     } else{
      $(".notWeb").hide('slow');
     }
   });
    $('.ui').click(function (e){
      e.preventDefault();
     if ($(".notUi").is(":hidden")){
       $(".notUi").slideDown("slow");
     } else{
      $(".notUi").hide('slow');
     }
   });
     $('.icon').click(function (e){
      e.preventDefault();
     if ($(".notIcon").is(":hidden")){
       $(".notIcon").slideDown("slow");
     } else{
      $(".notIcon").hide('slow');
     }
    });
    $('.brand').click(function (e){
      e.preventDefault();
     if ($(".notBrand").is(":hidden")){
       $(".notBrand").slideDown("slow");
     } else{
      $(".notBrand").hide('slow');
     }
   });
});

var tables = ["1","2","3","4"];

$(function() {      
  $(".order").click(function() { 
    $(this).parents("ul").addClass("ordered");
    $.each(tables, function() {
      if (!($("#table" + this[0]).hasClass("ordered"))) {
        $("#table" + this[0]).remove();
        $(".l-pricing-tables").css("width","100%")
        $(".l-order-form").slideDown("slow");
        $(".ordered").css("display","block")
        $(".l-order-form").css("display","block")
    }});
  });
});