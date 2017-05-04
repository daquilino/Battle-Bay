//creating the for sale table
module.exports = function(sequelize, DataTypes)
{
	var forSale = sequelize.define("forSale", 
	{
		item_name: 
		{

		},
		quantity:
		{

		},
		starting_price:
		{

		},
		highest_bid:
		{

		},
		highest_bidder:
		{

		},
		belongs_to:
		{

		}
	}, 
	{
		freezeTableName: true
	});

	return forSale;
};

/*
forSale
Item_name
quantity
starting_price
highest_bid
highest_bidder
belongs_to (foreign Key from User Table)
*/