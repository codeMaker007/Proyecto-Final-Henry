const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Review', {
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
      type: DataTypes.TEXT
    }
  });
};
