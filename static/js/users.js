$(function () {
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
            case 'following':
                $('.followingsPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            case 'posts':
                $('.postsPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            case 'likes': $('.likesPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            case 'followers': $('.followersPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            case 'comments': $('.commentsPagination').html(html).addClass('paginationActive');
                clickFun()
                break;
            default:
                break;
        }
    }

    if (1) {//(GetQueryString("id") == '登录获取的id'
        $('.usersInfo .user_image').attr({
            'data-toggle': "modal",
            'data-target': "#updateImageModal",
        })
        $('.usersInfo .usersName svg').click(function () {//修改弹窗信息
            $('#modifyModal .modal-footer .submitReplayBtn').hide()
            $('#modifyModal .modal-footer .modifyUsersNameBtn').show()
            $('#modifyModal .modal-body .modalInput').val('')
            $('#modifyModal .modal-body .invalid-feedback').hide()
            $(this).attr({
                'data-toggle': "modal",
                'data-target': "#modifyModal",
            })
            $('#modifyModal .modal-header h5').text('Modify Name')
            $('#modifyModal .modal-body .modalInput').addClass('modifyUsersName')
            $('#modifyModal .modal-body .modifyUsersName').val($(this).parents('.usersName').find('.usersName').text())
        })
    } else {
        $('.usersInfo .usersName svg').hide()
        $('.followBtn').hide()
        $('.followersBtn').hide()
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

    clickNav = function (index) {
        $('#' + index).trigger('click')
    }

    $('#modifyModal .modal-footer .modifyUsersNameBtn').click(() => {//提交修改用户名
        let name = $('#modifyModal .modal-body .modifyUsersName').val()
        if (name == '' || name == null) {
            $('#modifyModal .modal-body .invalid-feedback').show()
        } else {
            console.log(name)
        }
    })

    $('.usersInfo ul li').click(function () {
        $('#' + $(this).attr('aria-controls')).addClass('paginationActive').siblings().removeClass('paginationActive')
    })

    followMessageFun = function (name) {//修改弹窗信息
        $('#modifyModal .modal-footer .submitReplayBtn').show()
        $('#modifyModal .modal-footer .modifyUsersNameBtn').hide()
        $('#modifyModal .modal-body .modalInput').val('')
        $('#modifyModal .modal-body .invalid-feedback').hide()
        $('.following-right .followMessage').attr({
            'data-toggle': "modal",
            'data-target': "#modifyModal",
        })
        $('#modifyModal .modal-header h5').text(name)
        $('#modifyModal .modal-body .modalInput').addClass('submitReplay')
    }
    $('#modifyModal .modal-footer .submitReplayBtn').click(function () {//提交回复信息
        let val = $('#modifyModal .modal-body .submitReplay').val()
        if (val == '' || val == null) {
            $('#modifyModal .modal-body .invalid-feedback').show()
        } else {
            console.log(val)
        }
    })

    $('.following-right .followBtn').click(function () {
        if ($(this).hasClass('btn-outline-secondary')) {//已关注状态
            $(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary')
            $(this).find('svg').hide().parent().find('span').show()
        } else {//未关注状态
            $(this).removeClass('btn-outline-primary').addClass('btn-outline-secondary')
            $(this).find('svg').show().parent().find('span').hide()
        }
    })
    var EmImg = ""; //定义初始头像  我这里定义为空

    //初始化fileinput
    var FileInput = function () {
        var oFile = new Object();

        //初始化fileinput控件（第一次初始化）
        oFile.Init = function (ctrlName, uploadUrl) {
            var control = $('#' + ctrlName);

            //初始化上传控件的样式
            control.fileinput({
                language: 'en', //设置语言
                uploadUrl: uploadUrl, //上传的地址
                allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
                showUpload: true, //是否显示上传按钮
                showCaption: false,//是否显示标题
                browseClass: "btn btn-primary", //按钮样式
                //    dropZoneEnabled: true,//是否显示拖拽区域
                //    minImageWidth: 30, //图片的最小宽度
                //    minImageHeight: 30,//图片的最小高度
                //    maxImageWidth: 100,//图片的最大宽度
                //    maxImageHeight: 100,//图片的最大高度
                maxFileSize: 10,//单位为kb，如果为0表示不限制文件大小
                //minFileCount: 0,
                maxFileCount: 1, //表示允许同时上传的最大文件个数
                enctype: 'multipart/form-data',
                validateInitialCount: true,
                msgSizeTooLarge: 'File "{name}" ({size} KB) exceeds maximum allowed upload size of {maxSize} KB. Please retry your upload!',
                previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
                msgFilesTooMany: "The number of files selected for upload ({n}) exceeds the maximum allowed value {m}!",
            })


            //导入文件上传完成之后的事件
            $("#input-id").on("fileuploaded", function (event, data, previewId, index) {
                debugger
                var data = data.response;
                var last = data.lastIndexOf("Upload");
                EmImg = data.substring(last + 7);
                //document.getElementById('videoForm').outerHtml = document.getElementById('videoForm').outerHtml;
                //document.getElementById("videoForm").reset();
                $("#updateImageModal").modal('hide');
                $("#imgEmdImg").attr("src", "../FileUpload/Upload/" + EmImg);
                //alert(EmImg);
                //1.初始化表格
                //var oTable = new TableInit();
                //oTable.Init(data);
            });
        }
        return oFile;
    };
    //上传头像  
    var oFileInput = new FileInput();
    oFileInput.Init("input-id", "/Employee/UploadFile");   // **注意：这里是导入地址写好你的控制器  和方法名**

    // 获取地址栏用户id
    function GetQueryString(name) {
        var regex = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(regex);
        if (r != null) return unescape(r[2]);
        return null;
    }

})