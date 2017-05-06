// *********************************************************************************
// all-users-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
const DB = require("../models");

// Routes
// =============================================================
module.exports = function(app) 
{
	app.post("/api/user/signup", function(req, res)
	{
		//check if username is already taken
		DB.allUsers.findOne(
		{
			where: {username: req.body.signUpName}
		}).then(function(result)
		{
			//if username is available
			if (result === null)
			{
				//create user
				DB.allUsers.create(
				{
					username: req.body.signUpName,
					password: req.body.signUpPassword
				}).then(function(newUser)
				{
					console.log("Created a new user");
					console.log(newUser.dataValues);
					//set a cookie containing that user's id#
					res.cookie("id", newUser.dataValues.id);
					//redirect to homepage
					res.redirect("/");
				});
			}
			else //username is already taken.
			{
				console.log("username is already taken.");
				//redirect to sign up page with error
				res.redirect("/");
			}
		});
		
			
			//send to user-homepage
		//else
			//indicate username already taken
	});
	// app.post("/api/users", function(req, res) {
	// 	var name = req.body.name;
	// 	var pass = req.body.pass;

	// 	console.log(name, pass);

	// 	// here we need to check the database for the user to see if the name is a duplicate, then
	// 	// create a new user and give them the starting stats
	// 	// then redirect to that users-homepage

	// 	res.render("form-test");
	// });
  

	// app.get("/api/users/:id", function(req, res) {
	// 	var userID = req.params.id;

	// 	res.json(userAccountInfo);	
	// });


	// app.get("/api/users/:id/listings", function(req, res) {
	// 	var userID = req.params.id;

	// 	res.json(userAccountInfo);	
	// });

	// app.get("/api/warehouse/prices", function(req, res){
	// 	res.json(warehousePrices);
	// });

	// app.post("/api/warehouse/order", function(req, res){
	// 	var warehouse = req.body.warehouse;
	// 	var units = req.body.units;

	// 	console.log(warehouse, units);

	// 	res.render("form-test");
	// })
};
