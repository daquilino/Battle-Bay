Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {


	// GET Player account
	//-------------------------------------------------------------------------------------

	function getPlayerAccountInfo() {
		console.log("Get Player Account Info Button Pressed.");

		var id = 0;

		$.get("api/user/" + id, function(data){

			var username = data.username;
			var balance = data.balance;
			var money_spent = data.money_spent;
			var money_earned = data.money_earned;


			$("#playerAccountInfo").empty();
			$("#playerAccountInfo").append("<h4>" + username + "</h4>");
			$("#playerAccountInfo").append("<p>Balance: " + balance + "</p>");
			$("#playerAccountInfo").append("<p>Money Spent: " + money_spent + "</p>");
			$("#playerAccountInfo").append("<p>Money Earned: " + money_earned + "</p>");

		});
	}

	// GET player listings
	//-------------------------------------------------------------------------------------

	function getPlayerListings() {
		console.log("Get Player Listings Button Pressed.");

		var id = 0;

		$("#playerListings").empty();
		$("#playerListings").append("<h4>Your Active Listings</h4>");

		$.get("api/users/" + id + "/listings", function(data){

			var numberOfListings = 5;

			for (var i = 0; i < numberOfListings; i++){
				$("#playerListings").append("<p>=-=-=-=-=-=Listing " + i + " =-=-=-=-=-=</p>");
			}
		});

	}

	//=====================================================================================

	// GET players items sold
	//-------------------------------------------------------------------------------------

	function getPlayersItemsSold() {
		console.log("Get Players Items Sold.");

		var id = 0;

		$("#playersItemsSold").empty();
		$("#playersItemsSold").append("<h4>Your Inactive Listings</h4>");

		$.get("api/users/" + id + "/listings", function(data){

			var numberOfListings = 5;

			for (var i = 0; i < numberOfListings; i++){
				$("#playersItemsSold").append("<p>=-=-=-=-=-=Listing " + i + " =-=-=-=-=-=</p>");
			}
		});
	}

});