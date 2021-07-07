$(function () {
    var checkAllFlag = false
    var checkAllFlag2 = false
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