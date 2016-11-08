$(function(){
	/*选项卡*/
	$('.g_li').hover(function(){
		$('.g_div').stop().slideToggle()
	})
	/*导航*/
	if ($('.g_header').show()) {
		$('.gxl_nav').hide()
	} else{
		$('.gxl_nav').show()
	};
	$(window).scroll(function() {
		if($(window).scrollTop()>=300){
			$('.g_header').hide();
			$('.g_nav').hide();
			$('.gxl_nav').show();
			$('.hddb').show();
		$('.gxl_nav').css('top',0)
		}else{
			
			
			//if ($('.g_header').hide()&&$('.g_nav').hide()) {
				$('.g_header').show();
			$('.g_nav').show();
			$('.hddb').hide();
				$('.gxl_nav').hide()
			//}
		} 
	});
	//var scol=$(window).scrollTop()
	$('.hddb').click(function(){
		//$(window).stop().scrollTop(0)
		$('body').animate({scrollTop:0},1000)
		//alert($(window).scrollTop())
	})
})



