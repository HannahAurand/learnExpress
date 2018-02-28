//This is the requirements section, be sure to load all of these NPM's can just use npm i if there are already dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('hbs')
const methodOverride = require("method-override");
const session = require('express-session')
const passport = require('passport')

//This is a reference to the controller.js in controllers, ensures functionality of the MVC
const controllerController = require('./controllers/controller')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'))
//This is the beginning reference to the views/index.hbs, anything put in that file and layout will show up here
app.get('/', (req, res) => {
    res.render('index')
})
app.use(cookieParser())
app.use(bodyParser())

//reference to passport.js
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
//reference to user login information to create a session
app.use(function (req, res, next) {
    res.locals.currentUser = req.userName
    next()
})
app.use(session({secret: 'req.userName'}))

app.use(methodOverride("_method"));
app.use('/enter the location youd like this to be from', controllerController)
app.use('/user', userController)

//sets up the localhost and shows what nodemon should say if its working correctly
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
