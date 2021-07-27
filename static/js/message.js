$(function () {
    var messageId = ''
    var msgHtml = ''
    var modelsIds = ''
    var totalPage =0
    var pageSize = 10
    var obj = {
        currentPage: 1
    }
    var lastPage = 0
    htmlList(1)

    var checkAllFlag = false
    var checkAllFlag2 = false
    //proxy监听值的变化
    var observe1 = (object, onChange) => {
        const handler = {
            get(target, property, receiver) {
                try {
                    return new Proxy(target[property], handler);
                } catch (err) {
                    return Reflect.get(target, property, receiver);
                }
            },
            set(target, key, value, receiver) {
                onChange(value);
                return Reflect.set(target, key, value, receiver);
            }
        };
        return new Proxy(object, handler);
    };
    var html = `
<div class="rightdiv">
    <a class="firstPage">
        <span >First</span>
    </a>
    <a class="prePage" >
        <span >&lt;</span>
    </a>
    <a class="currentPage">
        <span>1</span>
    </a>
    <a class="nextPage" >
        <span >&gt;</span>
    </a>
    <a class="lastPage">
        <span >Last</span>
    </a>
</div>
`
$('.Pagination.paginationActive').html(html)


    navMain = function (tabName) {
        $('.Pagination').removeClass('paginationActive')
        watchedObj.currentPage = 1 //初始化当前页
        switch (tabName) {
            case 'messages':
                $('.messagesPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            case 'notifications':
                $('.notificationsPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            default:
                break;
        }
    }

    $('.followingsPagination').html(html)
    var watchedObj = observe1(obj, (val) => {
        // console.log(`哈哈哈，监听到值变化为${val}了`);
    });
    clickFun()
    function clickFun() {
        $('.paginationActive .rightdiv .firstPage').click(() => {//第一页
            watchedFun(1)
            $('.paginationActive .rightdiv .currentPage span').text(watchedObj.currentPage)
        })
        $('.paginationActive .rightdiv .lastPage').click(() => {//最后一页
            watchedFun(lastPage)
            $('.paginationActive .rightdiv .currentPage span').text(watchedObj.currentPage)
        })
        $('.paginationActive .rightdiv .prePage').click(() => {//上一页
            watchedFun(watchedObj.currentPage > 1 ? watchedObj.currentPage - 1 : 1)
            $('.paginationActive .rightdiv .currentPage span').text(watchedObj.currentPage)
        })
        $('.paginationActive .rightdiv .nextPage').click(() => {//下一页
            watchedFun(watchedObj.currentPage < lastPage ? watchedObj.currentPage + 1 : lastPage)
            $('.paginationActive .rightdiv .currentPage span').text(watchedObj.currentPage)
        })
    }

    watchedObj.currentPage == lastPage ? $('.rightdiv .nextPage').hide() : $('.rightdiv .nextPage').show()
    function watchedFun(size) {
        // console.log(size)
        htmlList(size)
        watchedObj.currentPage = size
        size == 1 ? $('.rightdiv .prePage').hide() : $('.rightdiv .prePage').show()
        size == lastPage ? $('.rightdiv .nextPage').hide() : $('.rightdiv .nextPage').show()
    }
    function htmlList(size) {
        $.ajax({//
            type: "post",
            url: "/web/user/login/getMessageList",
            dataType: 'json',
            data: '{"pageNum":"' + size + '"}',
            async: false,
            contentType: "application/json;charset=UTF-8",
            success: function (req) {
                if (req.data.list == 0) {
                    $('.paginationActive').hide()
                }
                let index = ''
                totalPage = req.data.total
                lastPage = Math.ceil(totalPage / pageSize)
                msgHtml = ''
                for (let data of req.data.list) {
                   data.message_status == 0 ? index++ : ''
                    msgHtml += `<li>
                    <div class="message-left">
                        <div class="sub-checkbox">
                            <input class="custom-checkbox" type="checkbox" name="subcheck" value="${data.id}">
                        </div>
                        <img src="${data.head_photo}" alt="users">
                        <div class="usersMessage">
                            <p class="name">${data.sys_user_account}
                            ${data.message_status==0?`<span class="badgeMessage"></span>`:''}
                            </p>
                            <p class="dataTime">
                            ${data.message_cre}
                            </p>
                        </div>
                    </div>
                    <div class="message-contents">
                        <p>${data.message}
                        </p>
                    </div>
                    <div class="messageBtn">
                        <button type="button" class="btn btn-outline-primary messageButton"
                            onclick="messageFun('${data.send_user_id}','${data.sys_user_account}','${data.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                            </svg>
                            Message
                        </button>
                    </div>
                </li>`
                }
                $('#nav-messages .item').html(msgHtml)
                $('#nav-messages-tab span').text(index)
            }
        })
      }
    checkall = function (num) {
        if (num == 1) {
            let checked = $('#nav-messages input[name=subcheck]')
            if (checkAllFlag) {//全不选
                checkAllFlag = false
                for (var i = 0; i < checked.length; i++) {
                    checked[i].checked = false;
                }
            } else {//全选
                checkAllFlag = true
                for (var i = 0; i < checked.length; i++) {
                    checked[i].checked = true;
                }
            }
        }
        else if (num == 2) {
            let checked = $('#nav-notifications input[name=subcheck]')
            if (checkAllFlag2) {//全不选
                checkAllFlag2 = false
                for (var i = 0; i < checked.length; i++) {
                    checked[i].checked = false;
                }
            } else {//全选
                checkAllFlag2 = true
                for (var i = 0; i < checked.length; i++) {
                    checked[i].checked = true;
                }
            }
        }
    }
    $(' .comments_user_btn span svg').click(function (event) {
        $(this).parent().siblings().toggle('fast')
    })

    $("body").on("click", function () {
        let dom = $('.comments_user_btn .comments_user_menu')
        for (let i = 0; i < dom.length; i++) {
            if (dom.eq(i).attr('style') == 'display: block;') {
                dom.eq(i).hide('fast')
            }
        }
    });

    setReadStatus = function (num) {//移除消息提示
        let checked =''
        if (num == 1) {
           
            for(let data of $('#nav-messages input[name=subcheck]:checked')){
                // console.log(data.attributes.value.nodeValue)
                checked += data.attributes.value.nodeValue+','
            }
            checked = checked.substring(0,checked.length-1)
            if (checked.length != 0) {
                // console.log(checked)
                ReadStatusFun(checked)
            }
        }
        else if (num == 2) {
            let checked = $('#nav-notifications input[name=subcheck]:checked')
            if (checked.length != 0) {
                console.log(checked)
            }
        }
    }
    delMessages = function (num) {//删除消息
        if (num == 1) {
            let checked =''
            for(let data of $('#nav-messages input[name=subcheck]:checked')){
                // console.log(data.attributes.value.nodeValue)
                checked += data.attributes.value.nodeValue+','
            }
            checked = checked.substring(0,checked.length-1)
            if (checked.length != 0) {
                console.log(checked)
                $.ajax({
                    type: "delete",
                    url: "/web/user/login/"+checked,
                    dataType: 'json',
                    async: false,
                    contentType: "application/json;charset=UTF-8",
                    success: function (req) {
                        location.reload()
                    }
                })
            }
        }
        else if (num == 2) {
            let checked = $('#nav-notifications input[name=subcheck]:checked')
            if (checked.length != 0) {
                console.log(checked)
            }
        }
    }
    messageClose = function (id, th) {
        console.log(id)
        $(th).parents('li').hide('fast')
    }
    messageFun = function (userId, name,id) {//回复弹窗信息
        $('.messageButton').attr({
            'data-toggle': "modal",
            'data-target': "#messageModal",
        })
        $('#messageModal .modal-header h5').text('Reply ' + name)
        messageId = userId
        modelsIds = id
    }
    function ReadStatusFun(checked){
        $.ajax({
            type: "put",
            url: "/web/user/login/"+checked,
            dataType: 'json',
            async: false,
            contentType: "application/json;charset=UTF-8",
            success: function (req) {
                location.reload()
            }
        })
    }
    $('#messageModal .modal-footer .submitReplayBtn').click(function () {//提交回复信息
        let val = $('#messageModal .modal-body .modalInput').val()
        if (val == '' || val == null) {
            $('#messageModal .modal-body .invalid-feedback').show()
        } else {
            $.ajax({
                type: "post",
                url: "/web/user/login/sendMessage",
                dataType: 'json',
                data: '{"to_user_id":"' + messageId + '","message":"' + $('#messageModal .modal-body .modalInput').val() + '"}',
                async: false,
                contentType: "application/json;charset=UTF-8",
                success: function (req) {
                    $('#messageModal').hide()
                    ReadStatusFun(modelsIds)
                }
            })
          
        }
    })

})