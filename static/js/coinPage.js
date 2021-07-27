$(function () {
    var totalPage = 0
    var index = 0
    var pageSize = 10
    var obj = {
        currentPage: 1
    }
    var lastPage = 0
    getTabData(1, 1)
    function getTabData(pageNum, type) {
        $.ajax({
            type: "post",
            url: "/web/user/login/getTabData",
            dataType: 'json',
            data: '{"pageNum":"' + pageNum + '","type":"' + type + '"}',
            async: false,
            contentType: "application/json;charset=UTF-8",
            success: function (req) {
                if (req.data.parentUserData.list == 0) {
                    $('.paginationActive').hide()
                    return false
                }
                // console.log(req.data.parentUserData.list.total)
                if (req.data.parentUserData.total > 10) {
                    $('.rightdiv .nextPage').show()
                }
                var html = ''

            }
        })
    }

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


    navMain = function (type) {
        $('.Pagination').removeClass('paginationActive')
        watchedObj.currentPage = 1 //初始化当前页
        switch (type) {
            case '1':
                $('.incomePagination').html(html).addClass('paginationActive');
                clickFun()
                getTabData(1, 1)
                index = 1
                break;
            case '2':
                $('.expenditurePagination').html(html).addClass('paginationActive');
                getTabData(1, 2)
                index = 2
                clickFun()
                break;
            default:
                break;
        }
    }

    $('.paginationActive').html(html)
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
        // console.log(size,index)
        getTabData(size, index)
        watchedObj.currentPage = size
        size == 1 ? $('.rightdiv .prePage').hide() : $('.rightdiv .prePage').show()
        size == lastPage ? $('.rightdiv .nextPage').hide() : $('.rightdiv .nextPage').show()
    }

})