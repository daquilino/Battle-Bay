module.exports = function(sequelize, DataTypes)
{
	var allUsers = sequelize.define("allUsers", 
	{
		username: 
		{
			type: DataTypes.STRING,
			validate: 
			{
				notNull: true,
				isAlphanumeric: true,
				notEmpty: true
			}
		},
		password:
		{
			type: DataTypes.STRING,
			validate: 
			{
				notNull: true,
				notEmpty: true
			}
		},
		balance:
		{
			type: DataTypes.INTEGER,
			defaultValue: 200,
			validate:
			{
				isInt: true,
				notNull: true
			}
		},
		money_spent:
		{
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate:
			{
				isInt: true,
				notNull: true
			}
		},
		money_earned:
		{
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate:
			{
				isInt: true,
				notNull: true
			}
		}
	},
	{
		//setting allUsers to have items for sale
		classMethods: 
		{
			associate: function(models)
			{
				//when a user is deleted, all their items for sale are deleted as well
				allUsers.hasMany(models.itemsForSale, 
				{
					onDelete: "cascade"
				});

				//when a user is deleted, all their inventory are deleted as well
				allUsers.hasMany(models.usersInventory, 
				{
					onDelete: "cascade"
				});
			}
		},
		freezeTableName: true;
	});

	return allUsers;
};





