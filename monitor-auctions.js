//load in the models
const DB = require("./models");


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


	var x;
	
	x = new Date();
	console.log("current time x:", x);
	console.log("current time x hour:", x.getHours());



	// This should be in a interval timer a little less than auctionTime
	// maybe put in its own function.
	DB.itemsForSale.findAll({include: [DB.allUsers]})
	.then(function(data)
	{
		itemsForSale = data;
		
			
		//// ==============  test time code ==================
		/**/	var currentItem = itemsForSale[4];	
		/**/
		/**/	x = new Date();
		/**/
		/**/	console.log("\nITEM:", currentItem.item_name);
		/**/	console.log("createdAt:", currentItem.createdAt);
		/**/	console.log("createdAt hours:", currentItem.createdAt.getHours());
				console.log("x time :", x);
				console.log("x hours:", x.getHours());
		/**/	console.log("x-currentItem.createdAt:", (x-currentItem.createdAt));
		/**/
		/**/
		/**/
		/**/
		/**/


	/*	
		//some kind of loop
		if(itemsForSale.length > 0)
		{
			for(var key in itemsForSale)
			{
				

				if(isExpired(currentItem, autionTime)
				{

					returnToUsersInventory(currentItem)


				}	

			}// for		
		}// if	
	*/

	});// DB		




};// module

/*
// checks if items auction time is up
function isExpired(item, auctionTime)
{
	//check how to handle createdAt time format?	

	//returns true or false.
}


function returnToUsersInventory(item, sold)
{

	//1. remove item.createdAt.
	//2. if sold item.sold = true (already set to false)
	//3. insert into users inventory
	//4. .then removeFromAuction(item)
}


function removeFromAuction(item)
{
	delete
}

*/



//TIME ISSUE createdAT is current time (10) with UTC time stamp

// Test hero to see what time I get back