$(function(){
	$(".lists .inner ul li").mouseover(function(){
		var cur = $(this).index();
		// console.log(cur1);
		$(this).addClass('bdt').siblings('.lists .inner ul li').removeClass('bdt')
		$(".shangping > div").eq(cur).addClass('show').siblings('.shangping > div').removeClass("show");
	})
	$(".first > ul > li").mouseover(function() {
		var cur = $(this).index();
		// console.log(cur);
		$(".first > ul > li").eq(cur).addClass('bd_b').siblings().removeClass('bd_b');
		$(".first > div ").eq(cur).addClass('show').siblings().removeClass('show');
	});
})
