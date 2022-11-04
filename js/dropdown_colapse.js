document.addEventListener('click', function (e) {
  if (e.target.matches('.payment_button_nav')) {
    if (window.innerWidth < 992) {
      let dropdown = document.querySelector('.navbar-collapse')
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show')
      }
    }
  }
})
