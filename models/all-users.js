//creating schema for the allUsers table
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
				notNull: true,
			}
		},
		money_spent:
		{
			type: DataTypes.INTEGER,
			validate:
			{
				isInt: true,
				notNull: true,
			}
		},
		money_earned:
		{
			type: DataTypes.INTEGER,
			validate:
			{
				isInt: true,
				notNull: true,
			}
		},
	},
	{
		freezeTableName: true;
	});

	return allUsers;
};