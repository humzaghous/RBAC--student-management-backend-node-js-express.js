
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hamza', 'postgres', 'HUMZAG', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, 
});

module.exports = sequelize;
