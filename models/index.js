const sequelize = require('./db');

const Activity = sequelize.import('./Activity');
const Hotel = sequelize.import('./Hotel');
const Restaurant = sequelize.import('./Restaurant');
const Place = sequelize.import('./Place');

Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

// const seedData = require('./seed');

// console.log(seedData);

const seed = () => {

};

module.exports = {
  // sync: sequelize.sync,
  models: {
    Activity,
    Hotel,
    Restaurant,
    Place
  },
  sequelize
};
