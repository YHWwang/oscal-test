$(function () {

    // $('.app-header .menu-icon').click(function () {
    //     $(this).toggleClass('clicked')
    //     $('.app-header .menu').toggleClass('active')
    // })
    // $('.menu_box .app-header .menu ul li.has-child').click(function () { //移动端点击产品的显示与隐藏
    //     if ($('.app-header .has-child .plus-icon').hasClass('clicked')) {
    //         if (!$(this).find('.plus-icon').hasClass('clicked')) {
    //             $('.app-header .has-child .plus-icon').removeClass('clicked')
    //             $('.app-header .has-child .app-nav-content').removeClass('active')
    //             $(this).find('.plus-icon').addClass('clicked')
    //             $(this).find('.app-nav-content').addClass('active')

    //         } else {
    //             $('.app-header .has-child .plus-icon').removeClass('clicked')
    //             $('.app-header .has-child .app-nav-content').removeClass('active')
    //         }

    //     } else {
    //         $(this).find('.plus-icon').toggleClass('clicked')
    //         $(this).find('.app-nav-content').toggleClass('active')
    //     }

    // })
    if(localStorage.email){
        $('.loged').show().siblings().hide()//登录成功改变状态
    }
    var M1 = $('.searchIcon ul li.loginSvg')
    M1.on('click',function(e){e.stopPropagation();})
    .find('a').on('click',function(){
        M1.find('.dropdown-menu').show();
    });
    $(document).on('click',function(){M1.find('.dropdown-menu').hide()})

    
    $('.searchIcon').click(function () {
        $(this).find('.searchIconBox svg').hide()
        $('div.searchInputBox').css('display','flex')
        $('.searchInput').focus()
    })
    $(".searchInput").blur(function(){
        setTimeout(function(){//添加时间定时器
            $('div.searchInputBox').css('display','none')
            $('.searchIcon').find('.searchIconBox svg').show()
        },100);
    });
    
  
})