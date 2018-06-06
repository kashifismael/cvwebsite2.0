const express = require('express')
const router = express.Router()
const CategoryService = require('../services/CategoryService')
const asyncMiddleware = require('../middleware/asyncMiddleware')

const _categoryService = new CategoryService()

router.get('/', asyncMiddleware( async(req, res, next) => {
    const allCategories = await _categoryService.getAllCategories()
    res.json(allCategories)
}))

router.post('/', asyncMiddleware( async(req, res, next) => {
    const category = { categoryName : req.body.categoryName }
    const addedCategory = await _categoryService.addCategory(category)
    res.json(addedCategory)
}))

module.exports = router