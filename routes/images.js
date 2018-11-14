const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'public/images/' });

const Image = mongoose.model('Image');

/* GET image. */
router.get('/:id', upload.single('file'), (req, res) => {
  res.send('respond with a resource');
});

/* Create new image */
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const image = new Image({
      ...req.body,
      url: req.file.path,
    });
    await image.save();
    return res.send();
  } catch (err) {
    // console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
