const Category = require('../models/Category')

class CategoryService {

    getAllCategories() {
        return Category.findAll()
    }

    addCategory(category) {
        return Category.create({
            categoryName: category.categoryName
        })
    }

}

module.exports = CategoryService