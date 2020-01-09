$(document).ready(function(){
  
  const modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    modalWindow = $('.modal__window'),
    closeBtn = $('.modal__close'),
    closeBtnWindow = $('.modal__window__close');

  modalBtn.on('click', function (){
    modal.toggleClass('modal--visible');
    $("body").css('overflow','hidden')
  });
  closeBtn.on('click', function (){
    modal.toggleClass('modal--visible');
    $("body").css('overflow', 'visible')
  });

  closeBtnWindow.on('click', function () {
    modalWindow.toggleClass('modal__window--visible');
    $("body").css('overflow', 'visible')
  });

  







  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    shortSwipes: false,
    longSwipes: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  

  next.css('left', prev.width() +17 + bullets.width() +17)
  bullets.css('left', prev.width() +17)


  wow = new WOW(
    {
      mobile: false
    }
  )
  wow.init();
  // Валидация формы, модальное окно
  $('.modal__form').validate({
    errorClass: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhone: {
        required:true,
        minlength: 17
      },
      // правило объекта
      userEmail: {
        required: true,
        email: true
      },
      policyСheckbox: {
        required: true
      }
    }, // сообщение
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не должно быть длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: mame@domain.com"
      },
      policyСheckbox: "Вы не согласились с обработкой" 
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendmodal.php",
        data: $('form').serialize(),
        success: function (response) {
          console.log('Вывелось!' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalWindow.addClass('modal__window--visible');
  

        }
      });
    },
  });


 // Валидация формы, controll
  $('.control__form__mobile').validate({
    errorClass: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userNameControlMobile: {
        required: true,
        maxlength: 15,

        
        minlength: 2
      },
      userPhoneControlMobile: {
        required: true,
        minlength: 17
      },
      policyСheckbox: {
        required: true
      }
    },
    messages: {
      userNameControlMobile: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не должно быть длиннее 15 букв"
      },
      userPhoneControlMobile: "Телефон обязателен",
      policyСheckbox: "Вы не согласились с обработкой" 
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendcontrol.php",
        data: $('form').serialize(),
        success: function (response) {
          console.log('Вывелось!' + response);
          $(form)[0].reset();
          modalWindow.addClass('modal__window--visible');
        }
      });
    },
  });

  $('.control__form__desctop').validate({
    errorClass: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userNameControl: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhoneControl: {
        required: true,
        minlength: 17
      },
      policyСheckbox: {
        required: true
      }
    },
    messages: {
      userNameControl: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не должно быть длиннее 15 букв"
      },
      userPhoneControl: "Телефон обязателен",
      policyСheckbox: "Вы не согласились с обработкой"
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendcontrol.php",
        data: $('form').serialize(),
        success: function (response) {
          console.log('Вывелось!' + response);
          $(form)[0].reset();
          modalWindow.addClass('modal__window--visible');
        }
      });
    },
  });
  
   // маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "Ваш номер телефона:" });


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Валидация формы, footer
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userNameFooter: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      userPhoneFooter: {
        required: true,
        minlength: 17
      },
      userQuestionFooter: "required",
      policyСheckbox: {
        required: true
      }
    },
    messages: {
      userNameFooter: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не должно быть длиннее 15 букв"
      },
      userPhoneFooter: "Телефон обязателен",
      userQuestionFooter: "Обязательное поле",
      policyСheckbox: "Вы не согласились с обработкой" 
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendfooter.php",
        data: $('form').serialize(),
        success: function (response) {
          console.log('Вывелось!' + response);
          $(form)[0].reset();
          modalWindow.addClass('modal__window--visible');
        }
      });
    }
    
  });
// карта
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.786786, 49.142331],
      zoom: 15,
    }, {
      searchControlProvider: 'yandex#search',
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш оффис',
        balloonContent: 'Вход со двора'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
          iconImageHref: 'img/mapmarker.png',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });
    myMap.behaviors.disable('scrollZoom'); 
    myMap.geoObjects
      .add(myPlacemark)
  });
  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});