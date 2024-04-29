const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController')

// console.log(loginController)
router.post('/api/login',loginController)

module.exports = router;