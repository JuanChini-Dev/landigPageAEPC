$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var destino = $(this.hash)
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]')
    }
    if (destino.length == 0) {
      destino = $('html')
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500)
    return false
  })
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autospeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
      },
    },
  })
})
;(function ($) {
  'use strict'

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown')
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown')
    }
  })
})

$('.counter').counterUp({
  time: 2000,
})

// myButton = document.getElementById('myBtn')

// // When the user scrolls down 20px from the top of the document, show the button
// function scrollFunctionBTT() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     myButton.style.display = 'block'
//   } else {
//     myButton.style.display = 'none'
//   }
// }
