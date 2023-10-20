$(function () {
  const menuBtn = document.querySelector('.menu__btn');
  const menuMobile = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
  })


  const swiperOne = new Swiper('.feedback__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  }
});


  $('.sertificates__slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    variableWidth: true
  })


  $(".accordion__content").css("display", "none");
  $(".accordion__title").click(function () {
    $(".accordion__title").not(this).removeClass("open");
    $(".accordion__title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
});
});