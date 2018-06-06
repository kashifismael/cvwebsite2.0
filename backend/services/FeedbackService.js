const Feedback = require('../models/Feedback')

class FeedbackService {

    addFeedback(feedback){
        return Feedback.create(feedback)
    }

    getAllByCvId(cvId){
        return Feedback.findAll({
            where: {
                cvId: cvId
            }
        })
    }

}

module.exports = FeedbackService