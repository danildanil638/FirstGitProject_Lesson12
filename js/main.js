/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
   }
    modalBtn.forEach(element => {
      element.addEventListener('click', switchModal);
    });
  closeBtn.addEventListener('click', switchModal);
    });
*/
$(document).ready(function(){
  const modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  
  modalBtn.on('click', function (){
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function (){
    modal.toggleClass('modal--visible');
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

  new WOW().init();

});
