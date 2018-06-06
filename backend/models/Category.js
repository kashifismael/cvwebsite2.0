const db = require('./db')

const Category = db.define('categories', {
    categoryName: {
        type: db.Sequelize.STRING,
        field: 'category_name'
    }
})

module.exports = Category