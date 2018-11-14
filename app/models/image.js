/*!
 * Module dependencies
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const Image = new Schema({
  url: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
  metadata: { type: String, required: true },
});


/**
 * Register
 */

mongoose.model('Image', Image);
