const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


//Routes
const HomepageRouter = require('./src/routes/homepage');
const SignInRouter = require('./src/routes/signin');

//Conguration
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    next();
});

const MONGODB_URL = "mongodb+srv://prathamesh:9420776721@cluster0-wem5a.mongodb.net/test?retryWrites=true&w=majority"

//Database connection
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: 'sparkclasses',
    useFindAndModify: false
}, (error) => {
    if (!error) {
        console.log('Connected to database');
    } else {
        console.log(error);
    }
});

//Session
app.use(session({
    name: "ssid",
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true
    }
}));

//Options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set("view engine", "ejs");

//Main routes
app.use('/', HomepageRouter);
app.use('/signin', SignInRouter);

//Not found
app.use((resquest, response, next) => {
    return response.status(404).send('Hmm! Not found');
});



module.exports = app;