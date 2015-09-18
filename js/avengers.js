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

