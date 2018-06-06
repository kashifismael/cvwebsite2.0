const express = require('express')
const router = express.Router()
const StudentService = require('../services/StudentService')
const asyncMiddleware = require('../middleware/asyncMiddleware')

const _studentService = new StudentService()

router.get('/:id', asyncMiddleware( async (req, res, next) => {
        const student = await _studentService.getStudentByUserId(req.params.id)
        res.json(student)
}))

router.post('/', asyncMiddleware( async (req, res, next) => {
    let newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        telephoneNo: req.body.telephoneNo,
        addressLineOne: req.body.addressLineOne,
        addressLineTwo: req.body.addressLineTwo,
        addressLineThree: req.body.addressLineThree,
        postCode: req.body.postCode,
    }
    const addedStudent = await _studentService.createStudent(newStudent)
    res.json(student)
}))


module.exports = router