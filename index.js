// Importing required modules
const express = require('express');
const router = require('./Routes/routes');


// Creating an instance of express app
const app = express();

// Define a route for the homepage
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router);


// Starting the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
