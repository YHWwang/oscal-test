$(function () {
    
    VideoWith()
    switchProduct = function (proName) { // 显示对于的产品菜单块
        menuHide()
        setTimeout(() => {
            menuShow()
        }, 500);
    }
    $('.app-header .menu-icon').click(function () {
        $(this).toggleClass('clicked')
        $('.app-header .menu').toggleClass('active')
    })
    $('.menu_box .app-header .menu ul li.has-child').click(function () { //移动端点击产品的显示与隐藏
        if ($('.app-header .has-child .plus-icon').hasClass('clicked')) {
            if (!$(this).find('.plus-icon').hasClass('clicked')) {
                $('.app-header .has-child .plus-icon').removeClass('clicked')
                $('.app-header .has-child .app-nav-content').removeClass('active')
                $(this).find('.plus-icon').addClass('clicked')
                $(this).find('.app-nav-content').addClass('active')

            } else {
                $('.app-header .has-child .plus-icon').removeClass('clicked')
                $('.app-header .has-child .app-nav-content').removeClass('active')
            }

        } else {
            $(this).find('.plus-icon').toggleClass('clicked')
            $(this).find('.app-nav-content').toggleClass('active')
        }

    })
    $('.nav-content .menu_lab div').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
    })
    $('.menu-sign').click(()=>{
         localStorage.setItem('goSignPage', true)
         window.location.href='./login.html'
    })

    var M1 = $('.menu_box .login .loginIcon ul li.loginSvg')
    M1.on('click',function(e){e.stopPropagation();})
    .find('a').on('click',function(){
        M1.find('.dropdown-menu').show();
    });
    $(document).on('click',function(){M1.find('.dropdown-menu').hide()})
    
    // $('.loged').show().siblings().hide()//登录成功改变状态
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
    
    $('.menu_box .pc-header .menu ul li').click(function () {
        $('.menu_box .pc-header .menu ul li .mhref').removeClass('on')
        $(this).find('a').addClass('on')
    })

    $('.close-icon').click(function () {
        $('.menu_box .pc-header .menu ul li .mhref').removeClass('on')
        menuHide()
        $('body').css('overflow', 'auto')
    })




    function menuHide() {
        $('.nav-content').removeClass('nav-menu-hide')
        return false
    }
    function menuShow() {
        $('.nav-content').addClass('nav-menu-hide')
        return true
    }
    function VideoWith() {
        var width = document.body.offsetWidth;
        if (width < 800) {
            $('.big-img').each(function () {
                var _this = $(this)
                var src = $(this).attr('data-phone')
                _this.attr('src', src);
            });
        };
    }
})