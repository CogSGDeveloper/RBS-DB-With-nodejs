const Sequelize = require('sequelize');
const db = require('./../util/sequelize-db');

const User = db.define('User',{
    user_id:{
  
        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,
  
        // To increment user_id automatically.
        autoIncrement:true,
  
        // user_id can not be null.
        allowNull:false,
  
        // For uniquely identify user.
        primaryKey:true
    },
    username: {
        type: Sequelize.STRING
    },
    contactNumber:{
        type: Sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING
    },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

module.exports = User;