const User = require('../Model/UserModel');
const generateToken = require('../Util/Token');
const bcrypt = require('bcrypt');
const Login = require('../Model/LoginModel');

const RegisterController = async (req, res) => {
  try {
    const id = req.body.idNumber;
    const existingUser = await User.findOne({ idNumber: id });
    if (existingUser) {
      console.log(existingUser);
      return res.status(400).send('User Already Exists');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      idNumber: req.body.idNumber,
      department: req.body.department,
      year: req.body.year,
    });

    await user.save();

    const login = new Login({
      idNumber: req.body.idNumber,
      password: hashedPassword,
    });

    await login.save();

    const token = generateToken(user._id);
    res.status(201).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const LoginController = async (req, res) => {
  try {
    const id = req.body.idNumber;
    const login = await Login.findOne({ idNumber: id });

    if (!login) {
      return res.status(400).send('User Not Found');
    }

    const validPassword = await bcrypt.compare(req.body.password, login.password);
    if (!validPassword) {
      return res.status(400).send('Invalid Password');
    }

    const user = await User.findOne({ idNumber: id });
    const token = await generateToken(user._id);

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const UserInfoController = async (req, res) => {
    try {
      console.log("Decoded token:", req.user); 
      const userId = req.user.id;
    //   console.log(userId);
      const user = await User.findById(userId);
    //   console.log("User:", user);
      if (!user) {
        return res.status(404).send('User Not Found');
      }
  
      return res.status(200).send({
        firstName: user.firstName,
        lastName: user.lastName,
        idNumber: user.idNumber,
        email: user.email,
        department: user.department,
        year: user.year,
        paid: user.paid
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
module.exports = { RegisterController, LoginController, UserInfoController };
