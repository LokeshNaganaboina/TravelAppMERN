const express = require('express');
const router = express.Router();

const signUpController = require('../controllers/signupController')
const loginController = require('../controllers/loginController')


router.route("/register")
      .post(signUpController)

router.route("/login")
      .post(loginController)

module.exports = router;