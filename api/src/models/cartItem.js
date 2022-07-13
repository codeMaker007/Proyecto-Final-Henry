const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('CartItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
