const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    categories: {
      type: DataTypes.ENUM("MotherBoard", "RAM", "Micro-procesador", "SSD", "HDD", "M.2NVme", "Placa de video", "Monitor", "Fuente de alimentación", "Teclados", "Auriculares", "Mouse", "Mousepad", "Sillas", "Gabinete", "Webcam", "Parlante", "Micrófono", "Refrigeración"),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    freeShipping: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    amountSold: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });
};
