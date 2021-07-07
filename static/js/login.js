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
  
    $('.sendCode').click(function () {
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
                    } else {
                        data.remember = false
                        localStorage.setItem("remember", data.remember);
                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

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
                        passpword: event.currentTarget[2].value,
                    }
                    console.log(data)
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
                    $('.successWord').html(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
                    <span>An e-mail with instructions to create a new password has been sent to you.</span>
                    `)

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