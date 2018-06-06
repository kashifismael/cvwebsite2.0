const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:@localhost/cvwebsite');

db
    .authenticate()
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// connection.sync({
//     //force: true,
//     logging: console.log
// }).then(() => {

// })

module.exports = db