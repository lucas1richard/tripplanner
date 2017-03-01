module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity', {
    name: {
      type: DataTypes.STRING
    },
    age_range: {
      type: DataTypes.STRING
    }
  });
};
