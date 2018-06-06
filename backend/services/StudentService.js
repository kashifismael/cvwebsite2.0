const User = require('../models/User')
const Student = require('../models/Student')
const bcrypt = require('bcrypt')

class StudentService {

    createStudent(newUser) {
        return Student.create({
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                emailAddress: newUser.emailAddress,
                password: newUser.password,
                userType: 'Student'
            },
            telephoneNo: newUser.telephoneNo,
            addressLineOne: newUser.addressLineOne,
            addressLineTwo: newUser.addressLineTwo,
            addressLineThree: newUser.addressLineThree,
            postCode: newUser.postCode,
        }, {
                include: [{
                    model: User
                }]
            })
    }

    getStudentById(id) {
        return Student.findById(id, {
            include: [{ model: User }]
        })
    }

    getStudentByUserId(userid) {
        return Student.findOne({
            where: { userId: userid },
            include: [{ model: User }]
        })
    }

}

module.exports = StudentService