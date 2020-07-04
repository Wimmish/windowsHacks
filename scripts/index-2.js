$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollLeft: $($(this).attr('href')).offset().left,
    },
    500,
    'linear'
  )
})