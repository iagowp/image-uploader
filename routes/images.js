const express = require('express');

const router = express.Router();

/* GET image. */
router.get('/:id', (req, res) => {
  res.send('respond with a resource');
});

/* Create new image */
router.post('/', (req, res) => {
  res.send('resource');
});

module.exports = router;
