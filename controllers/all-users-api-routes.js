// *********************************************************************************
// all-users-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
const DB = require("../models");



// Testing Variables
//------------------------------------------------------------------------------------
	var userAccountInfo = {
		username: "Troll",
		password: "UnderTheBridge12345",
		balance: "100",
		money_spent: "0",
		money_earned: "0"
	};

	var warehousePrices = {
		fashion: "2",
		electronics: "3",
		collectables: "1"
	};
//====================================================================================





// Routes
// =============================================================
module.exports = function(app) 
{
	app.post("/api/users", function(req, res) {
		var name = req.body.name;
		var pass = req.body.pass;

		console.log(name, pass);

		// here we need to check the database for the user to see if the name is a duplicate, then
		// create a new user and give them the starting stats
		// then redirect to that users-homepage

		res.render("form-test");
	});
  

	app.get("/api/users/:id", function(req, res) {
		var userID = req.params.id;

		res.json(userAccountInfo);	
	});


	app.get("/api/users/:id/listings", function(req, res) {
		var userID = req.params.id;

		res.json(userAccountInfo);	
	});

	app.get("/api/warehouse/prices", function(req, res){
		res.json(warehousePrices);
	});

	app.post("/api/warehouse/order", function(req, res){
		var warehouse = req.body.warehouse;
		var units = req.body.units;

		console.log(warehouse, units);

		res.render("form-test");
	})
};
