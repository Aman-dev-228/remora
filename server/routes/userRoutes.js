
const express = require('express');
const { userSignIn } = require('../controllers/authController');
const router = express.Router();

router.post('/signin', userSignIn)

module.exports = router;