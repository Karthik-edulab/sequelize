const {DataTypes}=require('sequelize');
const sequelize=require('./index')

  const User = sequelize.define('users', {

    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
      unique: "users_email_unique"
    }
       
    },{
        tableName:'users'
    });

  module.exports=User;
 
