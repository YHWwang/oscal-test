$(function () {
    $('#category').change(function(){
        selectCategory($(this).find('option:selected').attr('num'))
    })
    function selectCategory  (type) {//1新发2热门3精华4所有
        window.location.href = `/showUserCommunity?type=${type}&pageNum=1`
    }
    var postType = {
        4: '',
        3: '<img src="/OSCAL/oscal-test/static/img/blog-img/import.png" alt="import">',
        2: '<img src="/OSCAL/oscal-test/static/img/blog-img/hot.png" alt="hot">',
        1: '<img src="/OSCAL/oscal-test/static/img/blog-img/new.png" alt="new">'
    }
    checkList()

    function checkList() {
        $('.forumContent .forum-left .forumList ul li').each(function () {
             let icon = $(this).find('p.postsTit').attr('posttype')
             if(icon == '' || icon == null) return false
             $(this).find('p.postsTit').after(`<span>${postType[icon]}</span>`);
        })
    }

})