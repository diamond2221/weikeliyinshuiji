/*
* @Author: mack
* @Date:   2018-10-15 19:23:01
* @Last Modified by:   mack
* @Last Modified time: 2018-10-15 20:02:12
*/
$(function() {
    (function () {
        var $imgs = $("div.banner ul.imgs li");
        var $cirs = $("div.banner ul.cirs li");
        var len = $imgs.length;
        var timer = null;
        var idx = 0;
        // 点击小方块进行切换banner图片
        var $banner = $("div.banner");
        $banner.hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(rBtn, 2000);
        })
        $cirs.click(function() {
            idx = $(this).index();
            $imgs.eq(idx).stop(true).fadeIn(400).siblings().stop(true).fadeOut(400);
            $cirs.eq(idx).addClass('active').siblings().removeClass('active');
            // console.log(idx);
        })
        timer = setInterval(rBtn, 2000);
        function rBtn() {
            if ($imgs.is(":animated")) {
                return;
            }
            $imgs.eq(idx).fadeOut(400);
            idx++;
            if (idx > len - 1) {
                idx = 0;
            }
            $cirs.eq(idx).addClass('active').siblings().removeClass('active');
            $imgs.eq(idx).fadeIn(400);
        }
    })();
})
