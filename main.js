$(function () {

$(".graph").click(function() {
  $( 'progress' ).toggleClass("graphShow graphHide")
})

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
