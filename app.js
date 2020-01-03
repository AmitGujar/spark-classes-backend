const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routes
const HomepageRouter = require('./src/routes/homepage');

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
    useFindAndModify: false
}, (error) => {
    if (!error) {
        console.log('Connected to database');
    } else {
        console.log(error);
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set("view engine", "ejs");

app.use('/', HomepageRouter);


//Not found
app.use((resquest, response, next) => {
    return response.status(404).send('Hmm! Not found');
});



module.exports = app;