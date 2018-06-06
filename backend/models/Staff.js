const db = require('./db')
const User = require('./User')

const Staff = db.define('staff', {}, {
    tableName: 'staff'
})

Staff.belongsTo(User)

module.exports = Staff