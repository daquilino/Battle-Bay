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
	//Registering a new user
	app.post("/api/user/signup", function(req, res)
	{
		//check if passwords match
		if (req.body.signUpPassword === req.body.signUpPasswordConfirm)
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
				else //username is already taken
				{
					console.log("username is already taken.");
					//redirect to sign up page with error
					res.send({error: "Username already taken"});
				}
			});
		}
		else //paswords didn't match
		{
			console.log("passwords didn't match.");
			res.end();
		}
	});

	app.post("/api/user/login", function(req, res)
	{
		//Check if username exists in database 
		DB.allUsers.findOne(
		{
			where: 
			{
				username: req.body.signInName,
			}
		}).then(function(user)
		{
			//if username doesn't exist in database
			if (user === null)
			{
				console.log("user does not exist in database.");
				console.log(user);
				//send error message and redirect back
				res.end();
			}
			else //username exists in database
			{
				//if passwords match
				if (req.body.signInPassword == user.dataValues.password)
				{
					//sign user in
				}
				else //passwords didnt' match
				{
					
				}
				console.log("user exists in database");
				console.log(user.dataValues);
				res.end();
			}
				//check that password matches
		});
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
