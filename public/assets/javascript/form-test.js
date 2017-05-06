console.log("form-test.js has loaded");


//******** ALL COMPLETED FUNCTIONS ARE ON BOTTOM *******************

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
$(document).on("click", "#makeListing", updateSaleItem); //makeListing
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


//===================================================================
//=========================== WAREHOUSE FUNCTIONS ===================
//===================================================================

// get warehouse items
// purchase - needs to update warehouse item - insert into usersItems table.

//-------------------------------------------------------------------------------------
// Update a given warehouseItem by `id`'s `sold_quatnitiy` , bring user to the blog page when done
  function updateWarehouseItem(post) {
    $.ajax({
      method: "PUT",
      url: "/api/warehouse",
      data: post
    })
    .done(function(data) {
     	console.log(JSON.stringify(data, null, 2));
     	//create function to add 'data' item to usersInvetory
     	//call function here using data as argument.
    });
  }

// POST warehouse order
//-------------------------------------------------------------------------------------

function placeOrder() {
	console.log("Place Order Button Pressed.");
	
	var warehouse = $('input:radio[name=warehouse]:checked').val();
	var numberOfUnits = $(":input[name=amount]").val();

	// var orderInfo = {
	// 	warehouse: warehouse,
	// 	units: numberOfUnits
	// };

	// $.post("api/warehouse/order", orderInfo).then(function(){
	// 	console.log("Order Placed! Order: " + orderInfo);
	// });

	var post =
	{
		sold_quantity: numberOfUnits, //need to change to add sold_quantity += numberOfUnits
		id : 1

	}

	updateWarehouseItem(post);
}


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









  //======================================================================================
  //======================================================================================
  //============================ Completed Functions Below ==================================
  //======================================================================================
  //======================================================================================


//===================================================================
//=========================== ITEMS-FOR-SALE FUNCTIONS ==============
//===================================================================



//-------------------------------------------------------------------------------------
	

	// Post sellItem
	function sellItem(itemForSale)
	{	
		//  - populate item values from jQuery
		var item = {
			"item_name": "itemD",
			"quantity":  1,
			"starting_price":  1,
			"highest_bid": 1,
			"highest_bidder":  "bidderD",
			"allUserId":  1
		};
		
		$.ajax({
      	method: "POST",
      	url: "/api/forsale",
      	data: item
	    })
	    .done(function(data) {
	     	console.log(JSON.stringify(data, null, 2))
	     	//if item is created, 'data' should be item.
	    });
	}

	function deleteSaleItem(itemId)
	{
		var itemId = 4;

		$.ajax({
      	method: "DELETE",
      	url: "/api/forsale/" + itemId
      	
	    })
	    .done(function(data) {
	     	console.log(JSON.stringify(data, null, 2))
	     	console.log("data", data);
	    });

	}

	
	//------------------------------


	function updateSaleItem(itemId, highestBidder, highestBid)
	{

		highestBidder = "highestBidder";
		highestBid = 99;

		var updateData = {
			"highest_bidder": highestBidder,
			"highest_bid": highestBid
		};



		var itemId = 3;

		$.ajax({
      	method: "PUT",
      	url: "/api/forsale/" + itemId,
      	data: updateData

      	
	    })
	    .done(function(data) {
	     	console.log(JSON.stringify(data, null, 2))
	     	console.log("data", data);
	    });

	}