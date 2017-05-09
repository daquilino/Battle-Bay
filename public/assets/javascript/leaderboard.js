// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

	$(document).ready(function() {
		$.ajax({
			method: 'GET',
			url: '/api/leaderboard'
		})
		.done(function(data) {
			console.log(data);
			for (var i = 0; i < data.length; i++) {

				switch (i)
					{
						case 0: 
							var listItem = $("<h3>");
							listItem.addClass("first-place");
							listItem.html("Player: " + data[0].player + " " + "Profit: " + data[0].profit + " " + "Rank: " +  data[0].rank);
							break;
						case 1: 
							var listItem = $("<h3>");
							listItem.addClass("second-place");
							listItem.html("Player: " + data[1].player + " " + "Profit: " + data[1].profit + " " + "Rank: " +  data[1].rank);
							break;
						case 2: 
							var listItem = $("<h3>");
							listItem.addClass("third-place");
							listItem.html("Player: " + data[2].player + " " + "Profit: " + data[2].profit + " " + "Rank: " +  data[2].rank);
							break;
						default:
							var listItem = $("<h5>");
							listItem.html("Player: " + data[i].player + " " + "Profit: " + data[i].profit + " " + "Rank: " +  data[i].rank);
							break;
					}

				$(".rank-list").append(listItem);
			}
		});
	});

// });