module.exports = function(sequelize, DataTypes) {
  return sequelize.define('place', {
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL)
    },
  });
};
