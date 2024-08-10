const express = require('express');
const {RegisterController,LoginController,UserInfoController} = require('../Controllers/UserController');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/register', RegisterController);
router.post('/login', LoginController);
router.get('/userInfo',verifyToken,UserInfoController);
module.exports = router;
