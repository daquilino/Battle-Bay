//load in the models
const DB = require("./models");

/*  NOTES

	In order for Date() to work properly in localhost.
	You need to add "timezone": "America/New_York" parameter to 'development' in config.json

*/

//Assume 5 minute auctions for testing.

module.exports = function monitorAI(app)
{
	console.log("\nmonitor-autions function called\n"); //TEST CODE REMOVE
	
	//all array of items for sale obects.
	var itemsForSale;
	
	//flag to check if interval is active
	var intervalFlag = false;

	//const auctionTime = 5000; //miliseconds NOT CURRENTLY USED MAY REMOVE hard codded now

	
	DB.itemsForSale.findAll()
	.then(function(data)
	{
		itemsForSale = JSON.parse(JSON.stringify(data));  //this removes extra stuff from objects?

			
		if(itemsForSale.length > 0)
		{
			intervalFlag = true;
			
			//Runs every 5s until clearInterval is called.
			var intervalID = setInterval(function()
			{
				
					for(var key in itemsForSale)
					{
						var currentItem = itemsForSale[key];

						if(isExpired(currentItem)) // may use 'auctionTime' as argument 
						{
							itemsForSale.splice(key,1); // this will remove item from itemsForSale.				
							returnToUsersInventory(currentItem)
						}
						
					}// for		
					
			}, 5000);
			
		}//if	
		setTimeout(function()
		{

			if(intervalFlag)
				clearInterval(intervalID);
			
			monitorAI();
		
		}, 250000);

	});// DB		
};// module


//--------------------------------------
// checks if item auction's time is up. If so returns 'true', else returns 'false'
function isExpired(item)
{	
	var itemStartTime = new Date(item.createdAt);
	var currentTime = new Date();
	
	if((currentTime - itemStartTime) > 300000)   //5 minutes
	{
		return true;
	}	
	
	return false;

}

//--------------------------------------
// Adds item to 'usersInventory',
// then calls removeForSale() to remove item from 'itemsForSale'. 
function returnToUsersInventory(item, sold)
{
	var itemId = item.id;	

	// removes 'createdAt' and 'id' property from item
	delete item.createdAt;
	delete item.id;

	//adds 'sold' property to item
	item.sold = sold;

	DB.usersInventory.create(item)
	.then(function()
	{
		removeForSale(itemId);
	});
}

//--------------------------------------
// Deletes item with id 'forSaleId' from 'itemsForSale' table
function removeForSale(forSaleId)
{
	DB.itemsForSale.destroy(
    {
     	where: 
      	{
        	id: forSaleId
      	}
    });
}


