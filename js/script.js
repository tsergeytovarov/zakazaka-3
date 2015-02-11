$(function(){

  /* Обработка тултипов */

  // откртие и закрытие по ссылке
    $(".js-toggle-tooltip").on("click", function(){
      $(".tooltip").removeClass("tooltip--open");
      $(this).parents(".tooltip").toggleClass("tooltip--open");
      return false;
    })

  //  закрытие по крестику
    $(".js-close-tooltip").on("click", function(){
      $(this).parents(".tooltip").removeClass("tooltip--open");
      return false;
    })

})