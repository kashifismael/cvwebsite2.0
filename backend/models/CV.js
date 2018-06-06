const db = require('./db')
const Student = require('./Student')
const Category = require('./Category')

const CV = db.define('cv', {
    name: {
        type: db.Sequelize.STRING,
        field: 'cv_name'
    },
    status: {
        type: db.Sequelize.STRING,
        field: 'cv_status',
        defaultValue: 'Saved',
        validate: {
            isIn: {
                args: [[
                    'Saved',
                    'Submitted',
                    'Feedback Recieved',
                    'Completed']]
            }
        }
    },
    profile: {
        type: db.Sequelize.STRING
    },
    education: {
        type: db.Sequelize.STRING
    },
    experience: {
        type: db.Sequelize.STRING
    },
    technical: {
        type: db.Sequelize.STRING
    },
    awards: {
        type: db.Sequelize.STRING
    },
    hobbies: {
        type: db.Sequelize.STRING
    },
    submitDate: {
        type: db.Sequelize.DATE,
        field: 'submit_date'
    },
    recentFeedbackDate: {
        type: db.Sequelize.DATE,
        field: 'recent_feedback_date'
    },
    viewingPermitted: {
        type: db.Sequelize.BOOLEAN,
        field: 'viewing_permitted'
    }
}, {
        tableName: 'cv'
    })

CV.belongsTo(Student)
CV.belongsTo(Category)

module.exports = CV