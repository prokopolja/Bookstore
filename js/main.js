$(document).ready(function () {
  var categorySlider = new Swiper('.category-slider', {
    // Optional parameters
    loop: false,
    slidesPerView: 4,
    spaceBetween: 27,

    // Navigation arrows
    navigation: {
      nextEl: '.category-slider__button--next',
      prevEl: '.category-slider__button--prev',
    },
    // Управление клавиатурой
      keyboard: true,

  });
  var themeSlider = new Swiper(".slider-theme__container", {
    
    slidesPerColumnFill: 'row',
    loop: false,
    navigation: {
      nextEl: ".slide-button--next",
      prevEl: ".slide-button--prev",
    },  
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      320: {slidesPerView: 2, slidesPerColumn: 2},
      510: {slidesPerView: 3, slidesPerColumn: 2},      
      768: {slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0},
      1200: {slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27}
    },
  });
  var unreleasedSlider = new Swiper('.unreleased-slider', {
    // Optional parameters
    loop: false,
    slidesPerView: 5,
    spaceBetween: 32,
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      320: {slidesPerView: 1},
      576: {slidesPerView: 2, spaceBetween: 25},
      768: {slidesPerView: 4},
      1201: {slidesPerView: 5}
    },

    // Navigation arrows
    navigation: {
      nextEl: '.unreleased-slider__button--next',
      prevEl: '.unreleased-slider__button--prev',
    },
    // Управление клавиатурой
    keyboard: true,
  });


  
  //Модальное окно
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });


  var modalButton = $('[data-toggle=modal]');
  var closemodalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closemodalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault('');
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  // Закрыть модальное окно ESC
  $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });

  $(document).click(function (e) {
    if ($(e.target).is('.modal')) {
        closeModal();
    }
  });

  // Закрытие кликом ВНЕ ОКНА
  const modalOverlay = document.querySelector('.modal__overlay');
  document.onclick = function(e){
    if ( Event.target.className != 'modal__overlay' ) {
        popup.style.display = 'none';
    };
  };
  const modalDialog = document.querySelector('.modal__dialog');
  document.onclick = function(e){
    if ( Event.target.className != 'modal__dialog' ) {
        popup.style.display = 'none';
    };
  };
 

  // Обработка форм
  $('.form').each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters",
        },
        emailfixed: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Your phone number must be in the format of +7(xxx)xxx-xx-xx",
        },
      },
    });
  })

  $('.subscribe').validate({
    errorClass: "error",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    },
  });



  //Формат номера тлф
  $(document).ready(function(){
    $('.phone-number').mask('+7(999)999-99-99');
  });
  
  AOS.init();

});


