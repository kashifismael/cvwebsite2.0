const express = require('express')
const router = express.Router()
const CvService = require('../services/CvService')
const asyncMiddleware = require('../middleware/asyncMiddleware')

const _cvService = new CvService()

router.post('/', asyncMiddleware(async (req, res, next) => {
    //making a new cv, whether that is to be saved or submitted
    cvToAdd = {
        name: req.body.name,
        status: req.body.status, //decided on frontend
        profile: req.body.profile,
        education: req.body.education,
        experience: req.body.experience,
        technical: req.body.technical,
        awards: req.body.awards,
        hobbies: req.body.hobbies,
        submitDate: req.body.submitDate, //decided on frontend
        viewingPermitted: false,
        studentId: req.body.studentId,
        categoryId: req.body.categoryId
    }
    const addedCV = await _cvService.addCV(cvToAdd)
    res.json(addedCV)
}))

router.put('/:id', asyncMiddleware(async (req, res, next) => {
    const cvId = req.params.id;
    cvToUpdate = {
        id: cvId,
        name: req.body.name,
        status: req.body.status,
        profile: req.body.profile,
        education: req.body.education,
        experience: req.body.experience,
        technical: req.body.technical,
        awards: req.body.awards,
        hobbies: req.body.hobbies,
        submitDate: req.body.submitDate,
        viewingPermitted: false,
        studentId: req.body.studentId,
        categoryId: req.body.categoryId
    }
    const rowsAffected = await _cvService.updateCV(cvToUpdate, cvId)
    if (rowsAffected == 1) {
        const updatedCV = await _cvService.getCvById(cvId)
        res.json(updatedCV)
    }
}))

router.delete('/:id', asyncMiddleware(async (req, res, next) => {
    const cvId = req.params.id
    const deletedCV = await _cvService.deleteCV(cvId)
    res.json( { id: cvId })
}))

router.get('/', asyncMiddleware(async (req, res, next) => {
    const allCVs = await _cvService.getAllCVs()
    res.json(allCVs)
}))

router.get('/submitted', asyncMiddleware(async (req, res, next) => {
    const allCVs = await _cvService.getAllSubmittedCVs()
    res.json(allCVs)
}))

router.get('/:id', asyncMiddleware(async (req, res, next) => {
    const thisCV = await _cvService.getCvById(req.params.id)
    res.json(thisCV)
}))

router.get('/all/:id', asyncMiddleware(async (req, res, next) => {
    const allCVs = await _cvService.getAllCVsByStudentId(req.params.id)
    res.json(allCVs)
}))

router.get('/saved/:id', asyncMiddleware(async (req, res, next) => {
    const savedCVs = await _cvService.getAllCVsByStudentIdAndStatus(req.params.id, "Saved")
    res.json(savedCVs)
}))

router.get('/submitted/:id', asyncMiddleware(async (req, res, next) => {
    const savedCVs = await _cvService.getAllCVsByStudentIdAndStatus(req.params.id, "Submitted")
    res.json(savedCVs)
}))

router.get('/feedbackrecieved/:id', asyncMiddleware(async (req, res, next) => {
    const savedCVs = await _cvService.getAllCVsByStudentIdAndStatus(req.params.id, "Feedback Recieved")
    res.json(savedCVs)
}))
router.get('/completed/:id', asyncMiddleware(async (req, res, next) => {
    const savedCVs = await _cvService.getAllCVsByStudentIdAndStatus(req.params.id, "Completed")
    res.json(savedCVs)
}))

module.exports = router