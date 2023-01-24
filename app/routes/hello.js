const express = require('express');

const router = express.Router();

router.post('/world', (req, res) =>{
  res.send('Hello World')
})

module.exports = router;
