$(function () {
    var tooltop = $(".recommend").offset().top;
    var flag = true;
    function move() {
        if ($(document).scrollTop() >= tooltop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    move();

    if (flag) {
        $(window).scroll(function () {
            move();

            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("fixedtool-1").siblings().removeClass("fixedtool-1");
                }
            })

        })
    }

    $(".fixedtool li").click(function () {
        flag = false;
        var p = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: p
        }, function () {
            setTimeout(function () {
                flag = true;
            }, 400)
        })
        $(this).addClass("fixedtool-1").siblings().removeClass("fixedtool-1");
    })

})