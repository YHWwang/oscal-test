$(function () {
    window.addEventListener('load', function () { //搜索功能验证
        var forms = document.getElementsByClassName('needs-validation-searchPostsForm');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                window.event.returnValue = false;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    searchList()
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    function searchList(){
        $.ajax({//搜索列表数据
            type: "post",
            url: "/forum/search/topics",
            dataType: 'json',
            data: '{"pageNum":"' + 1 + '","community_title":"' + $('#searchTitle').val() + '"}',
            async: false,
            contentType: "application/json;charset=UTF-8",
            success: function (req) {
                let html = ''
             $('.searchNum span').text(req.totalTopics)
             for(let data of req.data.list){
                 html+=`
                 <div>
                 </div>
                 `
             }
             $('.searchListBox ul').html()
            }
          })
    }
})