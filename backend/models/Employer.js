const db = require('./db')
const User = require('./User')

const Employer = db.define('employers', {
    companyName: {
        type: db.Sequelize.STRING,
        field: 'company_name'
    },
    telephoneNo: {
        type: db.Sequelize.STRING,
        field: 'telephone_no'
    },
    isAuthorized: {
        type: db.Sequelize.BOOLEAN,
        field: 'is_authorized'
    },
    accessExpiryDate: {
        type: db.Sequelize.DATE,
        field: 'access_expiry_date'
    }
})

Employer.belongsTo(User)

module.exports = Employer