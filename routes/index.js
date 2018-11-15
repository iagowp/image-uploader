const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Image = mongoose.model('Image');

/* GET home page. */
router.get('/', async (req, res) => {
  const images = await Image.find();
  res.render('index', { title: 'Express', images });
});

module.exports = router;
