const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
    },
    dni: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
      },
    celphone: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: {
          args: [3, 255],
          mensaje: "El usuario tiene que tener 2 caracteres como minimo"
        }
      }
   },
    picture: {
    type: DataTypes.STRING,
    allowNull: true,
    }
  });
};
