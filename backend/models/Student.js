const db = require('./db')
const User = require('./User')

const Student = db.define('students', {
    telephoneNo: {
        type: db.Sequelize.STRING,
        field: 'telephone_no'
    },
    addressLineOne: {
        type: db.Sequelize.STRING,
        field: 'address_line_1'
    },
    addressLineTwo: {
        type: db.Sequelize.STRING,
        field: 'address_line_2'
    },
    addressLineThree: {
        type: db.Sequelize.STRING,
        field: 'address_line_3'
    },
    postCode: {
        type: db.Sequelize.STRING,
        field: 'postcode'
    }
})

Student.User = Student.belongsTo(User)

module.exports = Student