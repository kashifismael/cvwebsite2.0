const db = require('./db')
const CV = require('./CV')
const Staff = require('./Staff')

const Feedback = db.define('feedback', {
    dateOfFeedback: {
        type: db.Sequelize.DATE,
        field: 'date_of_fb',
        defaultValue: db.Sequelize.NOW
    },
    feedbackContent: {
        type: db.Sequelize.STRING,
        field: 'fb_content'
    }
}, {
        tableName: 'feedback'
    })

Feedback.belongsTo(CV)
Feedback.belongsTo(Staff)

module.exports = Feedback