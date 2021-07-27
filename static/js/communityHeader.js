$(function () {
    let dom = $('.header_main .pc-header .menuBox .nav li')
    // console.log(sessionStorage.getItem('communityMenu'))
    if (sessionStorage.getItem('communityMenu') != null) {
        $('.header_main .pc-header .menuBox .nav li').removeClass('active')
        dom.each((index, item) => {
            if (dom.eq(index).find('a').text() == sessionStorage.getItem('communityMenu')) {
                dom.eq(index).addClass('active')
                return false
            }
        })
    } else {
        dom.eq(0).addClass('active')
    }
    $('.menu_box .login .loginIcon ul li .usersInfo').text() > 99 ? $('.menu_box .login .loginIcon ul li .usersInfo').text('∞') : ''
    $(document).on('click', function () { M1.find('.dropdown-menu').hide() })
    $('.header_main .pc-header .menuBox .nav li').click(function () {//菜单点击记录当前页面
        // $('.header_main .pc-header .menuBox .nav li').removeClass('active')
        $(this).addClass('active').siblings().removeClass('active')
        sessionStorage.setItem('communityMenu', $(this).find('a').text())
    })
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
    if (localStorage.email) {
        $('.loged').show().siblings().hide()//登录成功改变状态
    }
    var M1 = $('.searchIcon ul li.loginSvg')
    M1.on('click', function (e) { e.stopPropagation(); })
        .find('a').on('click', function () {
            M1.find('.dropdown-menu').show();
        });
    $(document).on('click', function () { M1.find('.dropdown-menu').hide() })


    $('.searchIcon').click(function () {
        $('.searchIconBox .searchInput').addClass('active')
        
        $('.searchInput').focus()
    })
    $(".searchInput").blur(function () {
        $('.searchIconBox .searchInput').removeClass('active')
    });
})