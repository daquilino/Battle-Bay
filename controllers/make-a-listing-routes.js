//load in the models
const DB = require("../models");

//functions
function EnoughInInvetory(reqBody)
{
	//check item type being sold
	switch(reqBody.itemName)
	{
		case "fashion":
			return (parseInt(reqBody.numFashion) >= parseInt(reqBody.quantity));
			break;
		case "electronics":
			return (parseInt(reqBody.numElectronics) >= parseInt(reqBody.quantity));
			break;
		case "collectables":
			return (parseInt(reqBody.numCollectables) >= parseInt(reqBody.quantity));
			break;
		default:
			return false;
			break;
	}
}

//Routes
module.exports = function(app)
{
	app.post("/api/new-listing", function(req, res)
	{
		console.log("REQUEST COOKIES--------------------------------------");
		console.log(req.cookies);
		console.log("REQUEST BODY--------------------------------------");
		console.log(req.body);

		//if user has enough of inventory to make that sale
		if (EnoughInInvetory(req.body))
		{
			if (req.body.price > 0)
			{

			}
			else //price < 1
				res.json({error: "Starting price must be greater than 0"});


		}
		else //not enough in inventory
			res.json({error: "Not enough in stock"});
				//make listing in itemsForSale table
				//subtract the quantity being sold from user's inventory
	});
}