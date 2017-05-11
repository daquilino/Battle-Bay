//dependencies ===========================================================
const DB = require("../../models");

/*
In order for a botBid to be made, 3 decisions must be made.

    1. Select an item from itemsForSale (check if there are any)
        - query database for totalNum itemsForSale
        - randomly pick and item from there
    2. Decide if want to buy item
        - based on preference variables * RNG
    3. Decide how much to spend (if want to buy item)
        - based on preference variables * RNG
    
- If decide to buy item === true
    - make bid for whateverAmountDecided
*/

//constructor =============================================================
function BidderBot(nameInput, bidChance, bidRange)
{
	//Instance Variables ----------------------------------

	//private
	var name = nameInput
		, chance = bidChance
		, multiplier = bidRange
		, category = favoriteCategory;

	//Get/Set Properties -----------------------------------

	//public 
	this.GetName = function()
	{
		return name;
	};

	//Methods ---------------------------------------------

	//private
	var GetRandomItemIndex = function(numItems)
	{
		return Math.floor((Math.random() * numItems));
	};

	//private
	var DecideIfBuying = function(itemObject)
	{
		//include itemObject data in calculations further down the road

		var lottoNumber = Math.floor(Math.random() * 100);

		if (lottoNumber < chance)
		{
			console.log("chance: " + chance);
			console.log("lotto number: " + lottoNumber);
			return true;
		}
		else
		{
			console.log("chance: " + chance);
			console.log("lotto number: " + lottoNumber);
			return false;
		}
	};

	//private
	var DecideBidAmount = function(itemObject)
	{
		//iclude itemObject data in calculations further down the road

		if (itemObject.highest_bid !== null && itemObject.highest_bid !== 0)
		{
			console.log("going off highest bid");
			return Math.round((Math.random() + 1) * itemObject.highest_bid);
		}
		else	//nobody has bid on the item yet
		{
			console.log("going off starting price");
			return Math.round((Math.random() + 1) * itemObject.starting_price);
		}
	};

	//private
	var MakeBid = function(bidAmount, itemObject)
	{
		//make bid on selected item
		DB.itemsForSale.update(
		{
			highest_bid: bidAmount,
			highest_bidder: name
		},
		{
			where: 
			{
				id: itemObject.id
			}
		}).then(function(updatedItem)
		{
			console.log("------------ " + name + " bid: " + bidAmount + " ---------------");
			console.log("on:\n" + 
			"id: " + itemObject.id + "\n" +
			"startingPrice: " + itemObject.starting_price + "\n" +
			"prevHighestPrice: " + itemObject.highest_bid + "\n" +
			"prevHighestBidder: " + itemObject.highest_bidder + "\n" +
			"allUserId: " + itemObject.allUserId);
		});
	};

	//private
	var SelectItem = function()
	{
		//query itemsForSale
		DB.itemsForSale.findAll({}).then(function(saleItemsRaw)
		{
			//check the length
			if (saleItemsRaw.length > 0) //there are itemsForSale
			{
				var saleItems = [];

				//pull dataValues objects from saleItemsRaw
				for (var index = 0; index < saleItemsRaw.length; index++)
					saleItems.push(saleItemsRaw[index].dataValues);

				//Randomly pick one of the items
				var chosenIndex = GetRandomItemIndex(saleItems.length);

				//Decide if want to buy that item
				var isBuying = DecideIfBuying(saleItems[chosenIndex]);

				if (isBuying)
				{
					var bidAmount = DecideBidAmount(saleItems[chosenIndex]);

					MakeBid(bidAmount, saleItems[chosenIndex]);
				}
				else
					console.log(name + " is not buying the item at index: " + chosenIndex);
			}
			else
				console.log("no items for sale");

		});
	};

	//public
	this.StartBiddingCycle = function(seconds)
	{
		var bidId = setInterval(SelectItem, seconds * 1000);
	};
}

//exporting the module ====================================================
module.exports = BidderBot;

//testing =================================================================










