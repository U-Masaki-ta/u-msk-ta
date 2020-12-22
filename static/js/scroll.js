jQuery(function($){
	var headerHeight = $('.site-header').outerHeight();
	$('a[href^="#"]').click(function() {
		var href= $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500);	
	});
});	