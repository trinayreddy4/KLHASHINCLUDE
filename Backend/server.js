const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const env = require('dotenv');
env.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Importing routes
const userRoute = require(path.join(__dirname, 'Routes', 'UserRoutes.js'));

// Using routes
app.use('/api/user', userRoute);

app.post('/', (req, res) => {
  res.send('Hello World');
});

// Catch-all route for invalid routes
app.post('/*', (req, res) => {
  res.status(404).send('Invalid Route');
});
