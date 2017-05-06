// *********************************************************************************
// for-sale-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
const DB = require("../models");

// Routes
// =============================================================
module.exports = function(app) 
{

	app.get("/api/forsale", function(req, res)
	{
		DB.itemsForSale.findAll()
		.then(function(data)
		{
			res.json(data);
		});		
	});

  
};
