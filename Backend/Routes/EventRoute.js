const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const {createEvent, getEvents,getEvent,registerUserForEvent} = require('../Controllers/EventController');

router.post('/createEvent',verifyToken,createEvent);
router.get('/getEvents',getEvents);
router.get('/:id',getEvent);
router.post('/registerevent/:id',verifyToken,registerUserForEvent)
module.exports = router;