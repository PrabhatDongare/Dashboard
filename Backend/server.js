const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    res.status(200).send("Backend is LIVE...")
  }
  catch (error) {
    res.status(500).json({ message: 'Backend not WORKING...' });
  }
});

const routes = require('./routes/api')
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});