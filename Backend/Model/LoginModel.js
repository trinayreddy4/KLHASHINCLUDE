const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    idNumber:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Login', loginSchema);