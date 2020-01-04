const express = require('express');
const router = express.Router();

//User data model
const User = require('../models/User');

router.post('/', (request, response, next) => {
    //Get username and password
    //Check in database
    //if found then => Okay
    //else => error

    User.findOne({ $and: [{ email: request.body.userEmail }, { password: request.body.userPassword }] }).exec().
        then(user => {
            if (user) {
                response.status(200).json(user);
            } else {
                response.status(409).send('Auth failed');
            }
        }).catch(error => {
            console.log(error);
        })
});

router.post('/admin', (request, response, next) => {
    response.status(200).send('Signin successful Admin');
});

module.exports = router;