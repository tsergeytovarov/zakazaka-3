$(function(){

  /* Обработка тултипов */

  // откртие и закрытие по ссылке
    $(".js-toggle-tooltip").on("click", function(){

      var current = $(this).parents(".tooltip");

      if (current.hasClass("tooltip--open")){
        current.removeClass("tooltip--open");
      } else {
        $(".tooltip").removeClass("tooltip--open");
        current.addClass("tooltip--open");
      }

      return false;
    })

  //  закрытие по крестику
    $(".js-close-tooltip").on("click", function(){
      $(this).parents(".tooltip").removeClass("tooltip--open");
      return false;
    })

  /* Нотификации */

    // сокрытие  и удаление
    $(".js-delete-notice").on("click", function(){
      $(this).parents(".notice-item").slideUp(200);
    })

  /* Обработчик табов */

    // универстальный обработчки
    $(".js-tab-control").on("click", function(){
      var parent = $(this).parents(".js-tab-container");
      parent.find(".js-tab-control").removeClass("active");
      $(this).addClass("active");
      parent.find(".js-tab").removeClass("js-tab--open");
      parent.find("." + $(this).attr("data-tab") ).addClass("js-tab--open");
      return false;
    })

  //  работа с модальными окнами

    //  вызов окна
    $(".js-get-modal").on("click", function(){
      $(".modal-overlay").addClass("modal-overlay--open");
      $(".modal").removeClass("modal--open");
      $("." + $(this).attr("data-modal")).addClass("modal--open");
      $("body, html").addClass("body--hidden");
      return false;
    })

    // закрытие модальног окна изнутри
    $(".js-close-modal").on("click", function(){
      $(this).parents(".modal").removeClass("modal--open");
      $(".modal-overlay").removeClass("modal-overlay--open");
      $("body, html").removeClass("body--hidden");
      return false;
    })

    // закрытие по ESC

    $(window).on("keydown", function(){
      if (event.keyCode == 27) {
        $(".modal").removeClass("modal--open");
        $(".modal-overlay").removeClass("modal-overlay--open");
        $("body, html").removeClass("body--hidden");
      }
    })

  // карусель на главной
    $(".carousel").bxSlider({
      slideWidth: 5000,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 90,
      pager: false,
      moveSlides: 1
    });

})