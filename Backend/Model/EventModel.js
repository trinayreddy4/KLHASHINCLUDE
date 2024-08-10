const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    EventName: {
        type: String,
        required: true
    },
    EventDate: {
        type: Date,
        required: true
    },
    EventTime: { 
        type: String,
        required: true
    },
    EventLocation: {
        type: String,
        required: true
    },
    EventDescription: {
        type: String,
        required: true
    },
    EventImage: {
        type: String,
        required: true
    },
    SilPoints: {
        type: Number,
        required: true
    },
    CoreName: {
        type: String,
        required: true
    },
    CoreMobile: {
        type: Number,
        required: true
    },
    Limit: {
        type: Number,
        required: true
    },
    Registered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    SeatsLeft: {
        type: Number
    },
    __v: { type: Number, select: false }  
});

EventSchema.pre('save', function(next) {
    if (this.isNew) {
        this.SeatsLeft = this.Limit; 
    } else {
        this.SeatsLeft = this.Limit - this.Registered.length; 
    }
    next();
});

module.exports = mongoose.model('Event', EventSchema);
