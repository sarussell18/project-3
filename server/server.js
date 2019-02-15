require('dotenv').config();
const path = require("path");
const express = require("express");
const passport = require('passport');
const localStrategy = require('./authentication/passportAuth');
const authCheck = require('./authMiddleware/jwtAuth');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'))

// passport middleware
require('./authentication/passportAuth')


// db connection
require('./config/dbConnection')(mongoose);


//route imports
// const userRoutes = require('./api/routes/userRoutes');

const authRoutes = require('./api/routes/authRoutes');
// const bikeRoutes = require('./api/routes/bikeRoutes');
// const eventRoutes = require('./api/routes/eventRoutes');
//routes

// app.use('/apiUser', authCheck, userRoutes);
app.use('/authRoute', authRoutes);



app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From my Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/client/public/index.html'));
})


app.listen(PORT, ()=> {
  console.log(`App running on port ${PORT}`)
})