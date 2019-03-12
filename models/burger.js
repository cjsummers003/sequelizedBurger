module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define("burgers", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        noEmpty: true
      }
    },

    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },

    date: {
      type: DataTypes.DATE,
      defaulValue: DataTypes.NOW
    }
  }, 
  // {
  //     timestamps: false
  //   }
    );
    return Burgers;
}