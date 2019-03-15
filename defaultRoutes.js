const express = require('express');
const router = express.Router();
const defaultController = require('../contollers/defaultController');

//Routes
router.route('/')
    .get(defaultController.index);


router.route('/login')
    .get(defaultController.loginGet)
    .post(defaultController.loginPost);

module.exports = router;

