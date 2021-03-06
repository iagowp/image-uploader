const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const _ = require('lodash');

const router = express.Router();
const dest = process.env.NODE_ENV === 'test' ? 'public/images/test' : 'public/images/';
const upload = multer({ dest });

const Image = mongoose.model('Image');

/* GET image. */
router.get('/:id', async (req, res) => {
  const image = await Image.findOne({ _id: req.params.id });
  if (!image) return res.sendStatus(404);
  return res.render('single', { image });
});

/* Create new image */
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const metadata = _.pick(req.file, ['encoding', 'mimetype', 'originalname', 'size']);
    const image = new Image({
      ...req.body,
      url: req.file.filename,
      metadata,
    });
    await image.save();
    return res.redirect(`/images/${image.id}`);
  } catch (err) {
    // console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
