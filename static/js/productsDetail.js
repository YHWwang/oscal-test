$(function () {

    var active = $('.spesc-img-right .spesc-img-right-ul .spesc-active').find('.spescColor').attr('style')
    setColor(active)

    var MySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        autoplay: true,
        observer: true,//解决无法初始化问题
        observeParents: true,//解决无法初始化问题
        on: {
            slideChange: function () {
                $('.spesc-img-right .spesc-img-right-ul .spesc-active .spescColor').empty()
                $('.spesc-img-right .spesc-img-right-ul .spesc-img-right-ul-li').eq(this.activeIndex).addClass('spesc-active').siblings().removeClass('spesc-active')
                setColor($('.spesc-img-right .spesc-img-right-ul .spesc-img-right-ul-li').eq(this.activeIndex).find('.spescColor').attr('style'))
            },
        },
    });

    $('.spesc-img-right .spesc-img-right-ul .spesc-img-right-ul-li').click(function (e) {
        $('.spesc-img-right .spesc-img-right-ul .spesc-active .spescColor').empty()
        $(this).addClass('spesc-active').siblings().removeClass('spesc-active')
        setColor($(this).find('.spescColor').attr('style'))
        MySwiper.slideTo($(this).attr('num'))
    })
    function setColor(color) {
        color = `<style>
    .spesc-img-right .spesc-img-right-ul .spesc-active .spescColor::after{
    position: absolute;
    content: '';
    left: 50%;
    border: 4px solid ${color.slice(35, 42)};
    top: 50%;
    transform: translate(-50%,-50%);
    width: 65px;
    height: 65px;
    border-radius: 50%;
    }
    </style>`
        $('.spesc-img-right .spesc-img-right-ul .spesc-active .spescColor').append(color)
    }
    // function showImg(index) {
    //     var ds = $('swiper-slide swiper-slide-active .spesc-img-left img')
    //     imgLoad(ds, function () {
    //         ds.removeClass('on')
    //     })
    // }

    // function imgLoad(img, callback) {
    //     var timer = setInterval(function () {
    //         var flag = true
    //         if (img.complete) {
    //             callback();
    //             clearInterval(timer);
    //         } else if (flag) {
    //             flag = false
    //             img.addClass('on')
    //         }
    //     }, 200);
    // }
})