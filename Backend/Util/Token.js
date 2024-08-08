const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

const generateToken =async (id) => {
    return await jwt.sign({id}, process.env.TOKEN_SECRET);
}

module.exports = generateToken;