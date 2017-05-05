console.log("form-test.js has loaded");


// $(document).on("click", "button.delete", deleteTodo);

// $(document).on("click", "#", );

// For radio button:

//  var inp= $('input:radio[name=PatientPreviouslyReceivedDrug]:checked').val();
// For textbox:

//  var txt=$('input:text[name=DrugDurationLength]').val();

// On click events for all the form buttons
//-----------------------------------------------------------------------------------
$(document).on("click", "#signUpSubmit", signUp);
$(document).on("click", "#signInSubmit", signIn);
$(document).on("click", "#getPlayerAccountInfo", getPlayerAccountInfo);
$(document).on("click", "#getPlayerListings", getPlayerListings);
$(document).on("click", "#getPlayersItemsSold", getPlayersItemsSold);
$(document).on("click", "#getWarehousePrices", getWarehousePrices);
$(document).on("click", "#placeOrder", placeOrder);
$(document).on("click", "#getItemListings", getItemListings);
$(document).on("click", "#makeListing", makeListing);
//====================================================================================



// Testing Variables
//------------------------------------------------------------------------------------
	var userAccountInfo = {
		username: "Troll",
		password: "UnderTheBridge12345",
		balance: "100",
		money_spent: "0",
		money_earned: "0"
	};
//====================================================================================



// Function to handle sign ups
//------------------------------------------------------------------------------------

function signUp() {
	console.log("Sign Up Button Pressed.");
	//grab the inputs
	var name = $("input:text[name=signUpName]").val().trim();
	var pass = $("input:password[name=signUpPassword]").val().trim();
	var passConfirm = $("input:password[name=signUpPasswordConfirm]").val().trim();

	// For testing
	//console.log(name, pass);

	// If the passwords match post to users API route
	if (pass === passConfirm){

		var userInfo = {
			name: name,
			pass: pass,
			sign: "up"
		}
		
		//=-=-=-=-=-=-=-=
		$.post("/api/users", userInfo)
      	.then(function(){
      	console.log("Sent user info: " + userInfo);

    	});
		//=-=-=-=-=-=-=-=
	
	} else {
		$("input:text[name=signUpName]").val("");
		$("input:password[name=signUpPassword]").val("");
		$("input:password[name=signUpPasswordConfirm]").val("");
		console.log("Passwords do not match");
	}
}
//=====================================================================================



// Function to handle sign ins
//-------------------------------------------------------------------------------------

function signIn() {
	console.log("Sign In Button Pressed.");
	var name = $("input:text[name=signInName]").val().trim();
	var pass = $("input:password[name=signInPassword]").val().trim();

	var userInfo = {
			name: name,
			pass: pass,
			sign: "in"
	}

	//=-=-=-=-=-=-=-=
	$.post("/api/users", userInfo)
    .then(function(){
    console.log("Sent user info: " + userInfo);

    });
	//=-=-=-=-=-=-=-=
}

//=====================================================================================



// GET Player account
//-------------------------------------------------------------------------------------

function getPlayerAccountInfo() {
	console.log("Get Player Account Info Button Pressed.");

	var id = 0;

	$.get("api/users/" + id, function(data){

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

//=====================================================================================



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

//=====================================================================================



// GET warehouse prices
//-------------------------------------------------------------------------------------

function getWarehousePrices() {
	console.log("Get Warehouse Prices Button Pressed.");

	//=-=-=-=-=-=-=
	$.get("api/warehouse/prices", function(data){

		$("#warehousePrices").empty();
		$("#warehousePrices").append("<h4>Warehouse Prices</h4>");
		$("#warehousePrices").append("<p>Fashion--Price Per Unit: " + data.fashion + "</p>");
		$("#warehousePrices").append("<p>Electronics--Price Per Unit: " + data.electronics + "</p>");
		$("#warehousePrices").append("<p>Collectables--Price Per Unit: " + data.collectables + "</p>");

	});
	//=-=-=-=-=-=-=
}

//=====================================================================================



// POST warehouse order
//-------------------------------------------------------------------------------------

function placeOrder() {
	console.log("Place Order Button Pressed.");
	
	var warehouse = $('input:radio[name=warehouse]:checked').val();
	var numberOfUnits = $(":input[name=amount]").val();

	var orderInfo = {
		warehouse: warehouse,
		units: numberOfUnits
	};

	$.post("api/warehouse/order", orderInfo).then(function(){
		console.log("Order Placed! Order: " + orderInfo);
	});
}

//=====================================================================================



// GET all item listings
//-------------------------------------------------------------------------------------

function getItemListings() {
	console.log("Get Item Listings Button Pressed.");
}

//=====================================================================================



// POST make listing
//-------------------------------------------------------------------------------------

function makeListing() {
	console.log("Make Listing Button Pressed.");
}

//=====================================================================================