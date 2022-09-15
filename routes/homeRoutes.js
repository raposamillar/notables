const router = require('express').Router();

// Handle directory and file paths
const path = require('path');

router.get('/', (req, res) => 
  // Join arguments and send to the index.html file in the public directory
  res.sendFile(path.join(__dirname, '../public/index.html')));

router.get('/notes', (req, res) => 
  // Join arguments and send to the notes.html file in the public directory
  res.sendFile(path.join(__dirname, '../public/notes.html')));

router.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = router;  
