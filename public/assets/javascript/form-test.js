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


function signUp() {
	console.log("Sign Up Button Pressed.");
	var name = $("input:text[name=signUpName]").val().trim();
	var pass = $("input:password[name=signUpPassword]").val().trim();
	var passConfirm = $("input:password[name=signUpPasswordConfirm]").val().trim();

	console.log(name, pass)

	if (pass === passConfirm){
		//=-=-=-=-=-=-=-=
		$.post({});
		//=-=-=-=-=-=-=-=
	} else {
		$("input:text[name=signUpName]").val("");
		$("input:password[name=signUpPassword]").val("");
		$("input:password[name=signUpPasswordConfirm]").val("");
		console.log("Passwords do not match");
	}
}

function signIn() {
	console.log("Sign In Button Pressed.");
	var name = $("#signInName").val().trim();
	var pass = $("#signInPassword").val().trim();

	//=-=-=-=-=-=-=-=
	$.post({});
	//=-=-=-=-=-=-=-=
}

function getPlayerAccountInfo() {
	console.log("Get Player Account Info Button Pressed.");
}

function getPlayerListings() {
	console.log("Get Player Listings Button Pressed.");
}

function getPlayersItemsSold() {
	console.log("Get Players Items Sold.");
}

function getWarehousePrices() {
	console.log("Get Warehouse Prices Button Pressed.");

	//=-=-=-=-=-=-=
	$.get()
	//=-=-=-=-=-=-=
}

function placeOrder() {
	console.log("Place Order Button Pressed.");
	
}

function getItemListings() {
	console.log("Get Item Listings Button Pressed.");
}

function makeListing() {
	console.log("Make Listing Button Pressed.");
}