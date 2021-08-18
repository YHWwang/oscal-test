$(function () {
    new Vue({
        el: '#AMain',
        data() {
            return {
                value: [],
                data: [],
                options: []
            }
        },
        created() {
            this.options =  [
                    {
                        "is_os": 1,
                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                        "category_pid": 0,
                        "sonList": [],
                        "category_is_show": "1",
                        "id": 73,
                        "category_cate_name": "ipad"
                    },
                    {
                        "is_os": 1,
                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                        "category_pid": 0,
                        "sonList": [
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 54,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 69,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "社区规则"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 54,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 70,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "系统政策"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 54,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 71,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "设备说明书"
                            }
                        ],
                        "category_is_show": "1",
                        "id": 54,
                        "add_time": "2021-06-08 19:50:24",
                        "category_cate_name": "FAQ"
                    },
                    {
                        "is_os": 1,
                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                        "category_pid": 0,
                        "sonList": [
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 53,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 65,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "图片和视频"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 53,
                                "category_is_show": "1",
                                "osThirdCategory": [
                                    {
                                        "is_os": 1,
                                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                        "category_pid": 66,
                                        "category_is_show": "1",
                                        "id": 72,
                                        "add_time": "2021-06-08 19:50:24",
                                        "category_cate_name": "评测机型"
                                    }
                                ],
                                "id": 66,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "评测"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 53,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 67,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "建议反馈"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 53,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 68,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "技巧想法"
                            }
                        ],
                        "category_is_show": "1",
                        "id": 53,
                        "add_time": "2021-06-08 19:50:24",
                        "category_cate_name": "分享"
                    },
                    {
                        "is_os": 1,
                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                        "category_pid": 0,
                        "sonList": [
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 52,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 62,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "系统工具"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 52,
                                "category_is_show": "1",
                                "osThirdCategory": [
                                    {
                                        "is_os": 0,
                                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                        "category_pid": 63,
                                        "category_is_show": "0",
                                        "id": 74,
                                        "category_cate_name": "其它"
                                    }
                                ],
                                "id": 63,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "系统room"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 52,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 64,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "安卓"
                            }
                        ],
                        "category_is_show": "1",
                        "id": 52,
                        "add_time": "2021-06-08 19:50:24",
                        "category_cate_name": "系统和下载"
                    },
                    {
                        "is_os": 1,
                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                        "category_pid": 0,
                        "sonList": [
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 43,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 58,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "c20"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 43,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 59,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "c20pro"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 43,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 60,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "c80"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 43,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 61,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "s60"
                            }
                        ],
                        "category_is_show": "1",
                        "up_time": "2021-06-09 16:20:23",
                        "id": 43,
                        "category_sort": 0,
                        "add_time": "2021-06-08 19:50:24",
                        "category_cate_name": "玩法技巧"
                    },
                    {
                        "is_os": 1,
                        "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                        "category_pid": 0,
                        "sonList": [
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 42,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 55,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "问答"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 42,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 56,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "公告"
                            },
                            {
                                "is_os": 1,
                                "category_pic": "https://s3-eu-west-1.amazonaws.com/promo.blackview.hk/activity/oscal/img/menu_pho1.jpg",
                                "category_pid": 42,
                                "category_is_show": "1",
                                "osThirdCategory": [],
                                "id": 57,
                                "add_time": "2021-06-08 19:50:24",
                                "category_cate_name": "其他"
                            }
                        ],
                        "category_is_show": "1",
                        "up_time": "2021-06-09 18:34:19",
                        "id": 42,
                        "category_sort": 0,
                        "add_time": "2021-06-08 19:50:24",
                        "category_cate_name": "General"
                    }
                ]
            console.log(this.options)
        },
        methods: {
            handleChange(value) {

            }
        }
    })

    // $('#category').change(function () {
    //     selectCategory($(this).find('option:selected').attr('num'))
    // })
    // function selectCategory(type) {//1新发2热门3精华4所有
    //     window.location.href = `/showUserCommunity?type=${type}&pageNum=1`
    // }
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
            if (icon == '' || icon == null) return false
            $(this).find('p.postsTit').after(`<span>${postType[icon]}</span>`);
        })
    }

})