
/* jQuery返回顶部 */

$(document).ready(function() {
	
	// 1.滚动一定高度后显示 toTop 按钮
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		scrollTop >= 300 ? $("#toTop").show() : $("#toTop").hide();	
	});
	
	// 2.单击返回顶部
    $('#toTop').click(function(){
		$("html,body").animate( { "scrollTop" : 0 },1000 );	
	});
});
	