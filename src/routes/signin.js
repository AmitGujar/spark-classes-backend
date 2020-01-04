const express = require('express');
const router = express.Router();

//User data model
const User = require('../models/User');
const Admin = require('../models/Admin');

router.post('/', (request, response, next) => {
    User.findOne({ $and: [{ email: request.body.userEmail }, { password: request.body.userPassword }] }).exec().
        then(user => {
            if (user) {
                response.status(200).render('account');
            } else {
                response.status(409).render('signin', { title: "Signin to your account", userNotFound: true });
            }
        }).catch(error => {
            console.log(error);
        });
});

router.get('/admin', (request, response, next) => {
    response.status(200).render('admin_signin');
});

router.post('/admin', (request, response, next) => {
    Admin.findOne({ $and: [{ email: request.body.adminEmail }, { password: request.body.adminPassword }] }).exec().
        then(admin => {
            if (admin) {
                response.status(200).send('<h1> Please design admin dashboard </h1>');
            } else {
                response.status(409).send('Auth failed');
            }
        }).catch(error => {
            console.log(error);
        });
});



module.exports = router;