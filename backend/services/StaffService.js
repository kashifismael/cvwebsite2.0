const User = require('../models/User')
const Staff = require('../models/Staff')
const bcrypt = require('bcrypt')

class StaffService {

    createStaff(newUser) {
        return Staff.create({
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                emailAddress: newUser.emailAddress,
                password: newUser.password,
                userType: 'Staff'
            },
        }, {
                include: [{
                    model: User
                }]
            })
    }

    getStaffByUserId(userid) {
        return Staff.findOne({
            where: { userId: userid },
            include: [{ model: User }]
        })
    }

}

module.exports = StaffService
