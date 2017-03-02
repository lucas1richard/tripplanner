const Sequelize = require('sequelize');

const dbName = process.env.DATABASE;
const sequelize = new Sequelize(dbName, null, null, { dialect: 'postgres', logging: false });

module.exports = sequelize;
