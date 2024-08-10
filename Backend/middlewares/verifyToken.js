const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1]; 
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secretKey = process.env.TOKEN_SECRET; 
    const decoded = jwt.verify(token, secretKey); 
    req.user = decoded; 

    next(); 
  } catch (err) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};

module.exports = verifyToken;
