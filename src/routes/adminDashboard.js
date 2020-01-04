const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).render('admin_dashboard');
});

router.get('/new', (request, response, next) => {
    response.status(200).render('new_admission');
});

//Show add data here

module.exports = router;