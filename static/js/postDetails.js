$(function () {
  var height = window.innerHeight
  var ImgWidth = document.body.clientWidth //获取默认宽度
  var commentsData = {
    id: '',//编号
    comment: '',//评论内容
    user: 'test',//评论人（通过获取登录信息得到）
    commentator: '',//被评论人
  }
  if (ImgWidth < 800) {//移动端评论弹窗
    $(' .postContent .comments .comments_user_item .comments_reply .comments_reply_item').click(function () {
      let tit = $(this).find('.comments_reply_icon .comments_reply_icon_flag').attr('value')
      $('#exampleModalLabel').text('Reply ' + tit)
      commentsData.commentator = tit
      commentsData.id = id
      $(this).attr({
        'data-toggle': "modal",
        'data-target': "#exampleModal"
      })
    })
  }
  
  $('.postContent .comments .commentsTop .order').click(function(){
    $(this).find('.active').removeClass('active').siblings().addClass('active')
  })

  $('.replyPost').click(() => { //创建帖子按钮
    $('body,html').animate({
      scrollTop: $('#summernoteBox').offset().top - height * .3
    }, 500);
  })

  $('.shareSvg').click(function () {//点赞
    $(this).find('.active').removeClass('active').siblings().addClass('active')
    $(this).find('.active').hasClass('bi-hand-thumbs-up-fill') ? $(this).addClass('act') : $(this).removeClass('act')
  })

  $('.commomModal').click(function () {//打开评论模块框
    $(this).attr({
      'data-toggle': "modal",
      'data-target': "#exampleModal"
    })
    $('#exampleModalLabel').text('Reply ' + $(this).attr('value'))
    commentsData.commentator = $(this).attr('value')
  })

  $('#summernote').summernote({//富文本编辑
    placeholder: '',
    tabsize: 2,
    height: 300,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });

  MessageFun = function (name) {//修改弹窗信息
    $('#messageModal .modal-body .modalInput').val('')
    $('#messageModal .modal-body .invalid-feedback').hide()
    $('.usersBox .userBtn .followMessage').attr({
      'data-toggle': "modal",
      'data-target': "#messageModal",
    })
    $('#messageModal .modal-header h5').text(name)
    $('#messageModal .modal-body .modalInput').addClass('submitReplay')
  }
  $('#messageModal .modal-footer .submitReplayBtn').click(function () {//提交回复信息
    let val = $('#messageModal .modal-body .submitReplay').val()
    if (val == '' || val == null) {
      $('#messageModal .modal-body .invalid-feedback').show()
    } else {
      console.log(val)
      $('#messageModal').modal('hide')
    }
  })
  rewardInput = function(value){ //打赏数字限制
    value = value.replace(/[^\d]/g,'')
    if(value<1){
      value = 1
    }
    if(value>10){
      value = 10
    } 
    return value
  }
  $('#rewardModal .rewardBtn').click(function () {//提交回复信息
    let val = parseInt($('#rewardNum').val())
    let coin = 5 // O coin
    if (val > coin) {
      $('#rewardModal .modal-body .invalid-feedback').show()
    } else {
      console.log(val)
      $('#rewardModal').modal('hide')
      $('#rewardBtn').attr('disabled','disabled')
    }
  })

  $('.userBtn .followBtn').click(function () {
    if ($(this).hasClass('btn-outline-secondary')) {//已关注状态
      $(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary')
      $(this).find('svg').hide().parent().find('span').show()
    } else {//未关注状态
      $(this).removeClass('btn-outline-primary').addClass('btn-outline-secondary')
      $(this).find('svg').show().parent().find('span').hide()
    }
  })

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
            content: $('#summernote').val(),
          }
          console.log(data)
        }
        form.classList.add('was-validated');

      }, false);
    });
  }, false);

  $('.modal .modal-footer .commentsSubmit').click(function () {//提交回复评论
    commentsData.comment = $('.modal .modal-body .reply_content').text()
    if (commentsData.comment == '' || commentsData.comment == null) {
      alert('Comment cannot be empty')
      return false
    } else {
      console.log(commentsData)
    }
    $('#exampleModal').modal('hide')
  })

  $('#exampleModal').on('hidden.bs.modal', function (event) {//清空弹窗评论内容
    $('.modal .modal-body .comments_reply_content_wrap .reply_content').html('')
  })

  commentsDel = function () {
    var r = confirm("Are you sure to delete this comment?");
    if (r == true) {
      console.log('yes')
    }
  }

  $('.postContent .comments .comments_user_item .comments_users .comments_user_btn span svg').click(function (event) {
    $(this).parent().siblings().toggle('fast')
  })

  $("body").on("click", function () {
    if ($('.postContent .comments .comments_user_item .comments_users .comments_user_btn .comments_user_menu').attr('style') == 'display: block;') {
      $('.postContent .comments .comments_user_item .comments_users .comments_user_btn .comments_user_menu').hide('fast')
    }
  });
})