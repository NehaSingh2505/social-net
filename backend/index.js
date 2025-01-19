const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors")


  

mongoose.connect('mongodb+srv://lakshyamittal2405:izVI8Z5ZKvITcKMJ@database.glukj.mongodb.net/'). then(app.listen(3000, () => {
  console.log('Server is running on port 3000');
}));


app.post('/register', (req, res) => {
    res.send('signup');});