// *********************************************************************************
// warehouse-items-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Dependencies
// =============================================================
// Requiring our models
const DB = require("../models");

// Routes
// =============================================================
module.exports = function(app) 
{
	// get all data from 'warehouseItems'
	app.get("/api/warehouse", function(req, res)
	{
		DB.warehouseItems.findAll()
		.then(function(data)
		{
			res.json(data);
		});		
	});

			
	// use to update `units sold` 
	app.put("/api/warehouse", function(req, res)
	{		
			
		addToUserInventory(req.body.userID, req.body.quantity, req.body.warehouseName);
		updateUserStats(req.body.userID, req.body.total );
		
		DB.warehouseItems.update(
		{ 			
			 units_sold: DB.sequelize.literal('units_sold + ' + req.body.quantity)				
		},
		
		{
			where: 
			{
				id: req.body.warehouseID
			}
		})
		.then(function(data)
		{			
			res.json(data);  
		});

	});

// ====================== Optional Routes To Add/Delete Items ================================
/*				
				// Add items to warehouse
				app.post("/api/warehouse", function(req, res)
				{				
					DB.warehouseItems.create(req.body)
					.then(function(data)
					{
						res.json(data);  
					});		
				});


/*
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

// helper functions

//
function addToUserInventory(userId, quantity, itemName)
{
	var item ={	 
		
		quantity: quantity,
		item_name: itemName,
		allUserId: userId
	};


		DB.usersInventory.create(item)
		.then(function(data)
		{
			res.json(data);
		});		
	

}


//
function updateUserStats(userId, totalSpent )
{

	var updateObj = {
		balance: DB.sequelize.literal('balance + ' - req.body.quantity),
		money_spent: DB.sequelize.literal('money_spent + ' - req.body.quantity)

	};

	DB.allUsers.update(item, {where: {id: userId}})
	.then(function(data)
	{
		res.json(data);
	});	


}

