$(function () {
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

    var totalPage = 31
    var pageSize = 10
    var obj = {
        currentPage: 1
    }
    var lastPage = Math.ceil(totalPage / pageSize)
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


    function watchedFun(size) {
        watchedObj.currentPage = size
        size == 1 ? $('.rightdiv .prePage').hide() : $('.rightdiv .prePage').show()
        size == 4 ? $('.rightdiv .nextPage').hide() : $('.rightdiv .nextPage').show()
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

    setReadStatus = function (num) {//移除消息提示
        if (num == 1) {
            let checked = $('#nav-messages input[name=subcheck]:checked')
            if (checked.length != 0) {
                console.log(checked)
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
            let checked = $('#nav-messages input[name=subcheck]:checked')
            if (checked.length != 0) {
                console.log(checked)
            }
        }
        else if (num == 2) {
            let checked = $('#nav-notifications input[name=subcheck]:checked')
            if (checked.length != 0) {
                console.log(checked)
            }
        }
    }

    messageFun = function (name) {//回复弹窗信息
        $('.messageButton').attr({
            'data-toggle': "modal",
            'data-target': "#messageModal",
        })
        $('#messageModal .modal-header h5').text('Reply ' + name)
    }
    $('#messageModal .modal-footer .submitReplayBtn').click(function () {//提交回复信息
        let val = $('#messageModal .modal-body .modalInput').val()
        if (val == '' || val == null) {
            $('#messageModal .modal-body .invalid-feedback').show()
        } else {
            console.log(val)
            $('#messageModal .modal-body .invalid-feedback').hide()
        }
    })

})