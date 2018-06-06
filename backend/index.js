const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const cors = require('cors')
const asyncMiddleware = require('./middleware/asyncMiddleware')
const UserService = require('./services/UserService')

const _userService = new UserService()

const students = require('./controllers/students')
const employers = require('./controllers/employers')
const categories = require('./controllers/categories')
const cv = require('./controllers/cv')
const staff = require('./controllers/staff')
const feedback = require('./controllers/feedback')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post('/authenticate', asyncMiddleware(async (req, res, next) => {
    const user = { emailAddress: req.body.emailAddress, password: req.body.password }
    const isAuthenticated = await _userService.isAuthenticated(user)
    if (isAuthenticated) {
        const authUser = await _userService.getUser(user)
        res.json({ 
            message: "User authenticated",
            id: authUser.id,
            firstName: authUser.firstName,
            lastName:  authUser.lastName,
            emailAddress: authUser.emailAddress,
            userType: authUser.userType
        })
    } else {
        res.json({ message: "Access denied" })
    }
}))

app.use('/students', students)
app.use('/employers', employers)
app.use('/categories', categories)
app.use('/cv', cv)
app.use('/staff', staff)
app.use('/feedback', feedback)

app.get('*', (req, res) => {
    res.send("Page not found");
});

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})