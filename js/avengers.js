var tables = ["1","2","3","4"];

$(function() {      
  $(".order").click(function() { 
    $(this).parents("ul").addClass("ordered");
    $.each(tables, function() {
      if (!($("#table" + this[0]).hasClass("ordered"))) {
        $("#table" + this[0]).css("display","none");
    }});
  });
});

