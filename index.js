// server.js
const express = require('express');
const mongoose = require('./db');
const carsRoute = require('./carsRoute');
const bookingsRoute = require('./bookingsRoute'); // Import the new route
const userRoute = require('./routes/userRoute');
const adminRoute=require('./routes/adminRoute');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // You can also use '*' to allow requests from any origin, but it's less secure:
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Use the car and booking routes
app.use('/api/cars', carsRoute);
app.use('/api/bookings', bookingsRoute);
app.use('/api/users',userRoute);
app.use('/api/admins',adminRoute);

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`Node JS Server Started in port ${port}`));
