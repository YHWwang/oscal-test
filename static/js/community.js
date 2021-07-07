$(function () {
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  // $("#datetime").targger('click')

$('.check_login').click(function(){
  $(this).text('Signed in today').attr('disabled','disabled')
})

  $('.ViewMore').click(function () {
    $('.toast').toast('show')
    let html = ''
    // conmmunityMoreList = ''
    // if(conmmunityMoreList == ''){
    //   $('.content-left .ViewMore:hover').css('background','gray')
    //   return false
    // }
    // let index = $('.post-list ul li:last-child a').attr('value')

    // $('.post-list ul').append(html)

  })
})