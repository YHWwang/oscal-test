$(function () {
  var timestr = new Date(1626316875177)
  var year = timestr.getFullYear();
  var month = timestr.getMonth()+1;
  var date = timestr.getDate();
  switch (month) {
    case 1:month = 'Jan';break;
    case 2:month = 'Feb';break;
    case 3:month = 'Mar';break;
    case 4:month = 'Apr';break;
    case 5:month = 'May';break;
    case 6:month = 'Jun';break;
    case 7:month = 'Jul';break;
    case 8:month = 'Aug';break;
    case 9:month = 'Spt';break;
    case 10:month = 'Oct';break;
    case 11:month = 'Nov';break;
    case 12:month = 'Dec';break;
    default:
      break;
  }
  $('.check_day .year').text(year)
  $('.check_day .month').text(month)
  $('.check_day .date').text(date)
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