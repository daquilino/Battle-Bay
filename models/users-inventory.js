module.exports = function(sequelize, DataTypes){

  var usersInventory = sequelize.define("usersInventory", 
    {
      item_name: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: 
        {
          is: ["^[a-z]+$",'i'],
          notEmpty: true
        }
      },

      quantity: 
      {
        type: DataTypes.INTEGER,
        allowNull: false  
      }
   },
     {
      classMethods: 
        {
          associate: function(models) 
          {
            
            usersInventory.belongsTo(models.allUsers, 
            {
              foreignKey: 
              {
                allowNull: false
              }
            });
          }
        },
      freezeTableName: true,
      timestamps: false
    });
  return usersInventory;

};
