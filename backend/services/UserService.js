const User = require('../models/User')
const bcrypt = require('bcrypt')

class UserService {

    async isAuthenticated(user) {
        let isAuthenticated = false
        const accountFound = await this.getUser(user)
        if (accountFound) 
            isAuthenticated = bcrypt.compareSync(user.password, accountFound.password)
        return isAuthenticated
    }

    getUser(user) {
        return User.findOne({
            where: { emailAddress: user.emailAddress }
        })
    }

}

module.exports = UserService