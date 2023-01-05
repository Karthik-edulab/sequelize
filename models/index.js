const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('students', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log("Database connected Sucessfully !")
}
catch (error) {
    console.log("Database Not connected", error)
}

module.exports = sequelize;