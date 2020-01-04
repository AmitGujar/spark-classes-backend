const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).render('homepage');
});

router.get('/signin', (request, response, next) => {
    response.status(200).render('signin');
});

router.get('/signin/admin', (request, response, next) => {
    response.status(200).send('Please signin Admin');
});

router.get('/contact', (request, response, next) => {
    response.status(200).render('contact');
});

module.exports = router;