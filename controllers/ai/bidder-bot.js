//dependencies ----------------------------------------------------------
const DB = require("../../models");


/*
In order for a botBid to be made, 3 decisions must be made.

    1. Select an item from itemsForSale
        - query database for totalNum itemsForSale
        - randomly pick and item from there
    2. Decide if want to buy item
        - based on preference variables * RNG
    3. Decide how much to spend (if want to buy item)
        - based on preference variables * RNG
    
- If decide to buy item === true
    - make bid for whateverAmountDecided
*/

//constructor -----------------------------------------------------------
function bidderBot(name)
{
	//Instance Variables
	this.name = name;

	//Methods

	//private
	var GetRandomItemIndex = function(numItems)
	{
		return Math.floor((Math.random() * numItems));
	};

	//private
	var DecideIfBuying = function(itemObject)
	{
		//look at data in relation to bot preferences

		//decide if buying
	};

	//private
	var DecideBidAmount = function()
	{

	};

	//private
	var SelectItem = function()
	{
		//query itemsForSale
		DB.itemsForSale.findAll({}).then(function(saleItemsRaw)
		{
			var saleItems = [];

			//pull dataValues objects from saleItemsRaw
			for (var index = 0; index < saleItemsRaw.length; index++)
				saleItems.push(saleItemsRaw[index].dataValues);

			//Randomly pick one of the items
			var chosenItem = GetRandomItemIndex(saleItems.length);

			//Decide if want to buy that item
			var isBuying = DecideIfBuying(saleItems[chosenItem]);

			console.log(isBuying);

		});
	};

	//public
	this.StartBiddingCycle = function()
	{
		SelectItem();
	};

	
}

//testing ---------------------------------------------------------------
var hank = new bidderBot("Hank");
hank.StartBiddingCycle();









