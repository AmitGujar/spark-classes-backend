const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).render('homepage');
});

router.get('/signin', (request, response, next) => {
    response.status(200).render('signin', { title: "Signin to your account", userNotFound: false });
});



router.get('/contact', (request, response, next) => {
    response.status(200).render('contact');
});

module.exports = router;