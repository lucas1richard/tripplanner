module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurant', {
    name: {
      type: DataTypes.STRING
    },
    cuisine: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    }
  });
};
