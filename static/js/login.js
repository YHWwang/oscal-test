$(function () {
    setTimeout(() => {
        if (localStorage.email && localStorage.passpword && (localStorage.remember == 'true')) {//记住密码
            $('#validationCustom01').val(localStorage.email)
            $('#validationCustom02').val(localStorage.passpword)
            $('#invalidCheck').attr("checked", true)
        }
        $('.goSignPage').click(function () {
            localStorage.setItem('goSignPage', true)
        })
    }, 200);


    $('.loginContent .goSign a').click(function () {
        $('#profile-tab').click()
    })
    $('.loginContent .goLogin a').click(function () {
        $('#home-tab').click()
    })

    $('.sendCode').click(function () {//获取验证码
        let email = $('#validationCustom03').val()
        
        let data = {
            email: email,
            busType: 'register'
        }
        if($(this).hasClass('forget')){
            data = {
                busType: 'userForgetPass'
            }
            email = $('#validationForgotPwd01').val() 
        }
        if (email == '' || email == null) {
            alert('E-mail can not be empty')
            return false
        }
        $(this).addClass('disabled')
        let count = 60
        let text = $(this).text()
        let timer = null
        timer = setInterval(() => {
            count--
            $(this).text(count + ' S')
            if (count <= 0) {
                clearInterval(timer)
                $(this).removeClass('disabled')
                $(this).text(text)
            }
        }, 1000);
        $.ajax({
            type: "post",
            url: "/web/user/login/sendCode/getCode",
            dataType: 'json',
            data: '{"email":' + data.code + ',"busType":' + data.busType + '}',
            async: false,
            contentType: "application/json;charset=UTF-8",
            success: function (req) {
                debugger
            }
        })
    })

    window.addEventListener('load', function () { //登录功能验证
        var forms = document.getElementsByClassName('needs-validation-signInForm');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                window.event.returnValue = false;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    let data = {
                        email: event.currentTarget[0].value,
                        passpword: event.currentTarget[1].value,
                        remember: false
                    }
                    if ($('#invalidCheck').is(':checked')) {
                        data.remember = true
                        localStorage.setItem("email", data.email);
                        localStorage.setItem("passpword", data.passpword);
                        localStorage.setItem("remember", data.remember);
                        console.log(data)
                        login(data.email, data.passpword)
                    } else {
                        data.remember = false
                        localStorage.setItem("remember", data.remember);
                        console.log(data.email, data.passpword)
                        login(data.email, data.passpword)
                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    function login(email, passpword) {
        $.ajax({
            type: "post",
            url: "/web/user/login/userLogin",
            dataType: 'json',
            data: '{"sys_user_account":' + email + ',"login_password":' + passpword + '}',
            async: false,
            contentType: "application/json;charset=UTF-8",
            success: function (req) {
                localStorage.setItem('cateId',req.data.id)
                window.location.href('/community')
            }
        })
    }

    window.addEventListener('load', function () { //创建用户功能验证
        var forms = document.getElementsByClassName('needs-validation-signUpForm');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                window.event.returnValue = false;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    let data = {
                        name: event.currentTarget[0].value,
                        email: event.currentTarget[1].value,
                        code: event.currentTarget[2].value,
                        passpword: event.currentTarget[3].value,

                    }
                    $.ajax({
                        type: "post",
                        url: "/web/user/login/userRegister",
                        dataType: 'json',
                        data: '{"code":' + data.code + ',"user_account":' + data.email + ',"sys_user_account":' + data.name + ',"login_password":' + data.passpword + '}',
                        async: false,
                        contentType: "application/json;charset=UTF-8",
                        success: function (req) {
                            debugger
                        }
                    })
                }
                form.classList.add('was-validated');

            }, false);
        });
    }, false);

    window.addEventListener('load', function () { //忘记密码功能验证
        var forms = document.getElementsByClassName('needs-validation-forgotPwdForm');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                window.event.returnValue = false;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    let data = {
                        email: event.target[0].value,
                        code: event.target[1].value,
                        passpword: event.target[2].value,
                    }
                    console.log(data)
                    $.ajax({
                        type: "post",
                        url: "/web/user/login/userRegister",
                        dataType: 'json',
                        data: '{"code":' + data.code + ',"user_account":' + data.email + ',"sys_user_account":' + data.name + ',"login_password":' + data.passpword + '}',
                        async: false,
                        contentType: "application/json;charset=UTF-8",
                        success: function (req) {

                        }
                    })
                   

                }
                form.classList.add('was-validated');

            }, false);
        });
    }, false);

    if (localStorage.goSignPage == 'true') {
        $('#profile-tab').trigger('click')
        localStorage.setItem('goSignPage', false)
    }
})