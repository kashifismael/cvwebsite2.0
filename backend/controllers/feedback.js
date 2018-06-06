const express = require('express')
const router = express.Router()
const FeedbackService = require('../services/FeedbackService')
const asyncMiddleware = require('../middleware/asyncMiddleware')
const CvService = require('../services/CvService')

const _cvService = new CvService()
const _feedbackService = new FeedbackService()

router.post('/', asyncMiddleware(async (req, res, next) => {
    const cvId = req.body.cvId;
    const feedbackToAdd = {
        cvId : cvId,
        staffId : req.body.staffId,
        feedbackContent : req.body.feedbackContent
    }
    const addedFeedback = await _feedbackService.addFeedback(feedbackToAdd)
    const cvWithFeedback = await _cvService.updateCvStatus(req.body.status, cvId)
     res.json(addedFeedback)
}))

router.get('/cv/:id', asyncMiddleware(async (req, res, next) => {
    const cvId = req.params.id;
    const listOfFeedbacks = await _feedbackService.getAllByCvId(cvId);
    res.json(listOfFeedbacks);
}))

module.exports = router
