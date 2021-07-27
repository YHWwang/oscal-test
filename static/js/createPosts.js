$(function () {
    let dom = $('.createPostBox .sort .item') //选择帖子的类型
    var sort = 'Normal'
    postSort = function(index){
        $(dom).eq(index).addClass('active').find('img:nth-child('+(index+1)+')').show().siblings('img').hide().parent().siblings().removeClass('active').find('img:nth-child('+(index+1)+')').show().siblings('img').hide()
        index == 0 ? sort = 'Normal':sort = 'Q&A'
    }

    postCancel = function () {
        var r = confirm("Are you sure to leave the page?");
        if (r == true) {
          console.log('yes')
        }
      }
    $('#summernote').summernote({//富文本编辑
        placeholder: '',
        tabsize: 2,
        height: 462,
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'underline', 'clear']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link','picture','video']],
          ['view', ['fullscreen', 'codeview', 'help']]
        ],
        callbacks:{
            onImageUpload: function (files) {
                debugger
                sendFile($summernote, files[0]);
            }
        }
      });
      //ajax上传图片
      function sendFile($summernote, file) {
        var formData = new FormData();
        formData.append("file", file);
        $.ajax({
            url: "/upload",//路径
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function (data) {
                $summernote.summernote('insertImage', data, function ($image) {
                    $image.attr('src', data);
                });
            }
        });
    }

    window.addEventListener('load', function () { //创建帖子验证
        var forms = document.getElementsByClassName('needs-validation-createPostsForm');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                window.event.returnValue = false;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    let data = {
                        sort: sort,
                        title: $('#postTitle').val(),
                        content: $('#summernote').val(),
                        category: $('#category').val(),
                        section:$('#section').val(),
                        tag:$('#tag').val()
                    }
                    console.log(data)
                }
                form.classList.add('was-validated');

            }, false);
        });
    }, false);

})