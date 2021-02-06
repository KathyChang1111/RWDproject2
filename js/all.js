
$(document).ready(function () {


    // 觸發漢堡選單
    $(".showmenu").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("active");
    });



    // scroll to top 效果
    // $("a[href$='.jpg']").addClass('fas fa-arrow-alt-circle-up');

    $('.toTop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });

    function showBtnCondition() {
        if ($(this).scrollTop() > 600) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);


});




// 滑動錨點
$(function () {
    $(document).ready(function () {
        $('.menu > li > a').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 500);
        });
    });
})


// 加入收藏
$('.addFavorites').click(function (e) {
    e.preventDefault();
    $('i', this).toggleClass('far fa-heart fas fa-heart');
});