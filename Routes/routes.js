// routes.js

const express = require('express');
const router = express.Router();
const { addUser } = require('../Programs/program');
//  const { exampleFunction } = require('./functions');

// Define routes using imported handlers and functions
//  router.get('/', homepageHandler);

// Use the example function
router.post('/adduser', addUser);

// Add more routes using imported handlers and functions if needed

module.exports = router;
