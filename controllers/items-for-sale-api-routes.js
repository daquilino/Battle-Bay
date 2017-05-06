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
	
	//------------------------------------------------------
	//Get all items for sale
	app.get("/api/forsale", function(req, res)
	{
		DB.itemsForSale.findAll({include: [DB.allUsers],})
		.then(function(data)
		{
			res.json(data);
		});		
	});


	//------------------------------------------------------
	//Insert/create item for sale
	app.post("/api/forsale", function(req, res)
	{
		DB.itemsForSale.create(req.body)
		.then(function(data)
		{
			res.json(data);
		});		
	});

	
	//------------------------------------------------------
	//update item for sale
	app.put("/api/forsale/:id", function(req, res)
	{
		DB.itemsForSale.update(req.body,
		{
			where:
			{
				id: req.params.id
			}
		})
		.then(function(data)
		{
			res.json(data);
		});		
	});


	//------------------------------------------------------
	//Delete item from warehouse
	app.delete("/api/forsale/:id", function(req, res) 
	{
	    DB.itemsForSale.destroy(
	    {
	     	where: 
	      	{
	        	id: req.params.id
	      	}
	    }).then(function(data) 
	    {
	      res.json(data);
	    });
  	});

  
};

