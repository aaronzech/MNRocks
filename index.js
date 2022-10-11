const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const ejsMate = require('ejs-mate');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const methodOverride = require('method-override');
// Mongoose Items
const mongoose = require('mongoose');
const { MongoServerClosedError } = require('mongodb');
const User = require('./Models/user')

const passport = require("passport")
const LocalStrategy = require('passport-local');
app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/mnRocks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(methodOverride('_method'));

// Passport Plugins
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const userRoutes = require('./routes/users')



app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('ejs', ejsMate)

app.use('/',userRoutes)

app.get('/rock',(req,res) => {
    res.send('Rock from express');
})

app.get('/newUser',async (req,res) =>{
    const user = new User({email:'aaronzech@gmail.com', username:'aaronzech'})
    const newUser = await User.register(user,'admin') // < Password 
    res.send(newUser)
})

app.listen(3000,()=>{
    console.log("APP IS listening on port 3000")
})