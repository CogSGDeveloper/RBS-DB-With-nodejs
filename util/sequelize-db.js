const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    'demo',
    'admin', 
    'admin123', {
        host: 'database-1.xyz.ap-south-1.rds.amazonaws.com',
        dialect: 'mysql',
        port: 3306,
        dialectOptions: {
            ssl:'Amazon RDS'
        },
        pool: { maxConnections: 5, maxIdleTime: 30},
        language: 'en'
    }
);