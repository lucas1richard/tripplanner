module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotel', {
    name: {
      type: DataTypes.STRING
    },
    num_stars: {
      type: DataTypes.FLOAT,
      validate: {
        min: 1,
        max: 5
      }
    },
    amenities: {
      type: DataTypes.TEXT
    }
  });
};
