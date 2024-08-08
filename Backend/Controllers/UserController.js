const User = require('../Model/UserModel');
const generateToken = require('../Util/Token');
const bcrypt = require('bcrypt');
const Login = require('../Model/LoginModel');

const RegisterController =async (req, res) => {

    try{
    const id = req.body.idNumber;
    const existingUser =await User.findOne({idNumber:id});
    if(existingUser){
        console.log(existingUser);
        return res.status(400).send('User Already Exists');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user =await new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hashedPassword,
        idNumber:req.body.idNumber,
        department:req.body.department,
        year:req.body.year,
    });
    await user.save().then(async(data)=>{
        await new Login({
            idNumber:req.body.idNumber,
            password:hashedPassword,
        }).save();
        const token =await generateToken(data._id);
        res.send(token);
    }).catch((err)=>{
        res.status(500).send(err);
    });
    }
    catch(err){
        res.status(500).send(err);
    }
};

const LoginController = async (req, res) => {
    try{
    const id = req.body.idNumber;
    const user = await Login.findOne({idNumber:id});
    if(!user){
        return res.status(400).send('User Not Found');
    }
    const login = await Login.findOne({idNumber:id});
    const validPassword = await bcrypt.compare(req.body.password, login.password);
    if(!validPassword){
        return res.status(400).send('Invalid Password');
    }
    const token = await generateToken(user._id);
    res.send(token);
    }
    catch(err){
        res.status(500).send(err);
    }
};

module.exports = {RegisterController,LoginController};