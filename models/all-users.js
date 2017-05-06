module.exports = function(sequelize, DataTypes)
{
	var allUsers = sequelize.define("allUsers", 
	{
		username: 
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate: 
			{
				isAlphanumeric: true,
				notEmpty: true
			}
		},
		password:
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate: 
			{
				notEmpty: true
			}
		},
		balance:
		{
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 200,
			validate:
			{
				isInt: true,
			}
		},
		money_spent:
		{
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validate:
			{
				isInt: true,
			}
		},
		money_earned:
		{
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validate:
			{
				isInt: true,
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
		freezeTableName: true
	});

	return allUsers;
};





