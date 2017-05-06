// *********************************************************************************
// warehouse-items-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


/*-------- development notes ---------------
	


*/

// Dependencies
// =============================================================
// Requiring our models
const DB = require("../models");

// Routes
// =============================================================
module.exports = function(app) 
{
	// get all data from warehouseItems table
	app.get("/api/warehouse", function(req, res)
	{
		DB.warehouseItems.findAll()
		.then(function(data)
		{
			res.json(warehousePrices);
		});		
	});


	
	/*If in jQuery send body object 
			{
				id: ,
				units_sold: 
			}		
	data in callback should be data of item with id just updated? check. */

	// use to update `units sold`  warehouseItems
	app.put("/api/warehouse", function(req, res)
	{
		
		DB.warehouseItems.update(
		{ 
			units_sold: req.body.units_sold
		}
		,
		{
			where: 
			{
				id: req.body.id
			}
		})
		.then(function(data)
		{
			res.json(data);  
		});

	});

// ====================== Optional Routes =======================================
/*				
				// Add items to warehouse
				app.post("/api/warehouse", function(req, res)
				{
			console.log("\n\nCREATE");
			console.log(JSON.stringify(req.body, null, 2));
					
					DB.warehouseItems.create(req.body)
					.then(function(data)
					{
						res.json(data);  
					});		
				});


				//Delete item from warehouse
				app.delete("/api/posts/:id", function(req, res) 
				{
				    DB.warehouseItems.destroy(
				    {
				      where: 
				      {
				        id: req.params.id  
				      }
				    }).then(function(dbPost) 
				    {
				      res.json(dbPost);
				    });
			  	});
			
*/	

  
};
