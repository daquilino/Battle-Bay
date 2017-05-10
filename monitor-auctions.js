//load in the models
const DB = require("./models");

/*  NOTES

	In order for Date() to work properly in localhost.
	You need to add "timezone": "America/New_York" parameter to 'development' in config.json

*/

/*
If there are items for sale. check to see if completed (current_timestamp - createAt < auctionTime)
	- if complete did the sell (highest_bid > starting_price || highest_bid !== null)			
			
			YES - remove from items-for-sale, update all-users stats, move back to userInventory setting sold to true.
										
			No - remove from items-for-sale, move back to userInventory.	

*/



//Assume 5 minute auctions for testing.


module.exports = function(app)
{
	console.log("\nmonitor-autions function called\n"); //TEST CODE REMOVE

	//all array of items for sale obects.
	var itemsForSale;
	
	const auctionTime = 5000; //miliseconds

	
	
	// This should be in a interval timer a little less than auctionTime
	// maybe put in its own function.
	DB.itemsForSale.findAll()
	.then(function(data)
	{
		itemsForSale = JSON.parse(JSON.stringify(data));  //this removes extra stuff from objects?
			
		//// ==============  test time code ==================
		 //var currentItem = itemsForSale[5];	//TEST CODE REMOVE
	
		var intervalID = setInterval(function()
		{
			if(itemsForSale.length > 0)
			{
				for(var key in itemsForSale)
				{
					var currentItem = itemsForSale[key];

					if(isExpired(currentItem)) // can send in auctionTime 
					{
						//itemsForSale.splice(key,1); // this will remove item from for same array.
						
						//returnToUsersInventory(currentItem)


						console.log(currentItem.item_name , "EXPIRED!");
					}
					else //THIS ELSE IS TEST CODE REMOVE	
					{
						console.log(currentItem.item_name , "not expired");
					}	


				}// for		
			}// if		
		}, 5000);
		
		
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




/*			Interval timer notes


			timer (little less than 5 min, function()
			{
				
				stop timerid; //DOES THIS MAKE SENSE
				
				get itemsforsale.then(function{
	
					var timerid = timer(1000,function(){
					everything else here.





					})


				

				})






			})





*/