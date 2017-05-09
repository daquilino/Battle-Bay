Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
	// highlights the navbar link of the current page displayed
	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});
});