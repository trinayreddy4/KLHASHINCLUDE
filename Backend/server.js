const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const port = process.env.PORT||3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

