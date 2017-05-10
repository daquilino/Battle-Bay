// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
	console.log("all-listings.js loaded");

	$.ajax({
		method: 'GET',
		url: '/api/forsale'
	})
	.done(function(data) {
		console.log(data);
	 });
// });