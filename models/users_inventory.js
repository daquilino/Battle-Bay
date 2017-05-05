module.exports = function(sequelize, DataTypes){

var usersInventory = sequelize.define("usersInventory", {
  item_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$",'i']
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

  freezeTableName: true,

  });
return usersInventory;

}
