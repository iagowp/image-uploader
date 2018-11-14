const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Image = mongoose.model('Image');

/* GET image. */
router.get('/:id', (req, res) => {
  res.send('respond with a resource');
});

/* Create new image */
router.post('/', async (req, res) => {
  try {
    const image = new Image({
      ...req.body,
      url: 'magic',
    });
    await image.save();
    return res.send();
  } catch (err) {
    return res.send(500);
  }
});

module.exports = router;
