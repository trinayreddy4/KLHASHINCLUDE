const router = require('express').Router();
const {Order, verify} = require('../Controllers/PgController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/pay',Order);
router.get('/verify/:paymentid',verify);

module.exports = router;