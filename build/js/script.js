$(function(){

  $(".js-toggle-tooltip").on("click", function(){
    $(this).parents(".tooltip").toggleClass("tooltip--open");
  })

  $(".js-close-tooltip").on("click", function(){
    $(this).parents(".tooltip").removeClass("tooltip--open");
  })

})