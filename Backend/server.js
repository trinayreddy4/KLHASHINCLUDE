const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const env = require('dotenv');
env.config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const port = process.env.PORT || 3001;

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(`Error: ${err}`));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const userRoute = require(path.join(__dirname, 'Routes', 'UserRoutes.js'));
const EventRoute = require(path.join(__dirname,'Routes','EventRoute.js'));
const pgRoutes = require(path.join(__dirname,'Routes','PgRoutes.js'));
app.use('/api/user', userRoute);
app.use('/api/events',EventRoute);
app.use('/api/pg',pgRoutes);
app.post('/', (req, res) => {
  res.send('Hello World');
});

app.post('/*', (req, res) => {
  res.status(404).send('Invalid Route');
});
