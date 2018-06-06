const express = require('express')
const router = express.Router()
const asyncMiddleware = require('../middleware/asyncMiddleware')
const EmployerService = require('../services/EmployerService')

const _employerService = new EmployerService()

router.post('/', asyncMiddleware(async (req, res, next) => {
    let newEmployer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        telephoneNo: req.body.telephoneNo,
        companyName: req.body.companyName
    }
    const employer = await _employerService.registerEmployer(newEmployer)
    res.json(employer)
}))

router.get('/', asyncMiddleware(async (req, res, next) => {
    const allEmployers = await _employerService.getAllUnauthorisedEmployers()
    res.json(allEmployers)
}))

router.get('/:id', asyncMiddleware(async (req, res, next) => {
    const employer = await _employerService.getEmployerByUserId(req.params.id)
    res.json(employer)
}))

router.put('/authorize/:id', asyncMiddleware(async (req, res, next) => {
    const employerId = req.params.id 
    const rowsAffected = await _employerService.authorizeEmployer(employerId)
    if(rowsAffected == 1){
        const authEmployer = await _employerService.getEmployerById(employerId)
        res.json(authEmployer)
    }
}))

module.exports = router