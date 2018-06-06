const CV = require('../models/CV')

class CvService {

    getAllCVs(){
        return CV.findAll()
    }

    getAllSubmittedCVs(){
        return CV.findAll({
            where: {
                status : "Submitted"
            }
        })
    }
    
    getAllCVsByStudentId(studentId){
        return CV.findAll({
            where: {
                studentId : studentId
            }
        })
    }
    
    getAllCVsByStudentIdAndStatus(studentId, status){
        return CV.findAll({
            where: {
                studentId : studentId,
                status: status
            }
        })
    }

    getCvById(id){
        return CV.findById(id)
    }

    addCV(newCV){
        return CV.create(newCV)
    }

    updateCV(cvToUpdate, id){
        return CV.update(cvToUpdate, {
            where: { id: id }
        })
    }

    updateCvStatus(status, id){
        let cvToUpdate = { id : id, status: status }
        // if(isComplete == true)
        //     cvToUpdate.status = "Completed"
        return CV.update(cvToUpdate, {
            where: { id: id }
        })
    }

    deleteCV(cvId){
        return CV.destroy({
            where: { id: cvId }
        })
    }


}

module.exports = CvService