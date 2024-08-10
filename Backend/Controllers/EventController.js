const Event = require('../Model/EventModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { default: mongoose } = require('mongoose');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ 
    storage
 });

const createEvent = async (req,res)=>{

    try{

        upload.single('image')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json({ error: 'A Multer error occurred when uploading.' });
            } else if (err) {
                return res.status(500).json({ error: 'An unknown error occurred when uploading.' });
            }
        
            if (!req.file) {
                return res.status(400).json({ error: 'Image file is required.' });
            }
            
        const EventName = req.body.EventName;
        const EventDate = req.body.EventDate;
        const EventTime = req.body.EventTime;
        const EventLocation = req.body.EventLocation;
        const EventDescription = req.body.EventDescription;
        const EventImage = req.body.image;
        const SilPoints  = req.body.SilPoints;
        const CoreName = req.body.CoreName;
        const CoreMobile = req.body.CoreMobile;
        const Limit = req.body.Limit;
        const newEvent = new Event({
            EventName,
            EventDate,
            EventTime,
            EventLocation,
            EventDescription,
            EventImage:req.file? `/uploads/${req.file.filename}` : '',
            SilPoints,
            CoreName,
            CoreMobile,
            Limit,
        });
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully!', event: newEvent });
        });
    }
    catch(error)
    {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
    
}

const getEvents =async (req,res)=>{
    try{
    const events = await Event.find();
        res.status(200).json(events);
    }
    catch(err)
    {
        console.error('Error getting events:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }

}

const getEvent = (req,res)=>{
    const id = req.params.id;
    Event.findById(id).then(event=>{
        res.status(200).json(event);
    }).catch(err=>{
        console.error('Error getting event:', err);
        res.status(500).json({ error: 'Internal server error.' });
    });
}
const registerUserForEvent =async (req,res)=>{
    const eventId = req.params.id;
    const userId = req.user.id;
    try {
        const event = await Event.findById(eventId).exec();

        if (!event) {
            throw new Error('Event not found');
        }

        if (event.SeatsLeft <= 0) {
            throw new Error('No seats left for this event');
        }

        if (event.Registered.includes(userId)) {
            throw new Error('User is already registered for this event');
        }

        event.Registered.push(userId);
        event.SeatsLeft -= 1;

        const result = await event.save();

        console.log('User registered successfully!');
    } catch (error) {
        console.error('Registration failed: ', error.message);
    }
}
module.exports={createEvent,getEvents,getEvent,registerUserForEvent};