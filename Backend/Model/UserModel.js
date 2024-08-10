const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    idNumber:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    paid:{
        type:Boolean,
        default:false,
    },
    transactionId:{
        type:String,
        default:'',
    },
});

module.exports = mongoose.model('Users', userSchema);