const express = require('express')
const router = express.Router()
const asyncMiddleware = require('../middleware/asyncMiddleware')
const StaffService = require('../services/StaffService')

const _staffService = new StaffService()

router.get('/', asyncMiddleware(async (req, res, next) => {
    res.send("Hello KU Talent staff member")
}))

router.get('/:id', asyncMiddleware(async (req, res, next) => {
    const userid = req.params.id
    const staffMember = await _staffService.getStaffByUserId(userid)
    res.send(staffMember)
}))

router.post('/', asyncMiddleware(async (req, res, next) => {
    const newStaff = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password
    }
    const addedStaff = await _staffService.createStaff(newStaff)
    res.json(addedStaff)
}))

module.exports = router