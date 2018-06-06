const User = require('../models/User')
const Employer = require('../models/Employer')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')

const Op = Sequelize.Op

class EmployerService {

    registerEmployer(newUser) {
        return Employer.create({
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                emailAddress: newUser.emailAddress,
                password: newUser.password,
                userType: 'Employer'
            },
            telephoneNo: newUser.telephoneNo,
            companyName: newUser.companyName,
            isAuthorized: false,
            accessExpiryDate: null
        }, {
                include: [{ model: User }]
            })
    }

    getAllUnauthorisedEmployers() {
        return Employer.findAll({
            where: {
                [Op.or]: [
                    { isAuthorized: false },
                    {
                        accessExpiryDate: {
                            [Op.lt]: new Date()
                        }
                    }]
            }, include: [{ model: User }]
        })
    }

    getEmployerById(id){
        return Employer.findById(id)
    }

    getEmployerByUserId(userid) {
        return Employer.findOne({
            where: { userId: userid },
            include: [{ model: User }]
        })
    }

    getNewExpiryDate(){
        let result = new Date();
        result.setDate(result.getDate() + 5);
        return result.toISOString();
    }

    authorizeEmployer(id) {
        let authDetails = {
            isAuthorized: true,
            accessExpiryDate: this.getNewExpiryDate()
        }
        return Employer.update(authDetails, {
            where: { id: id }
        })
    }

}

module.exports = EmployerService