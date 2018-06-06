const db = require('./db')
const bcrypt = require('bcrypt')

const User = db.define('user', {
    firstName: {
        type: db.Sequelize.STRING,
        field: 'first_name',
    },
    lastName: {
        type: db.Sequelize.STRING,
        field: 'last_name'
    },
    emailAddress: {
        type: db.Sequelize.STRING,
        field: 'email_address',
        unique: true
    },
    password: {
        type: db.Sequelize.STRING
    },
    lastLogin: {
        type: db.Sequelize.DATE,
        field: 'last_login',
        defaultValue: db.Sequelize.NOW
    },
    userType: {
        type: db.Sequelize.STRING,
        field: 'user_type',
        defaultValue: 'Student',
        validate: {
            isIn: {
                args: [['Student', 'Staff', 'Employer']]
            }
        }
    }
} , {
    hooks: {
        afterValidate: (user) => {
            user.password = bcrypt.hashSync(user.password, 8)
        }
    }
})

module.exports = User