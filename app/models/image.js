/*!
 * Module dependencies
 */
const moment = require('moment');

const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageSchema = new Schema({
  url: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
  metadata: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

ImageSchema.virtual('displayDate').get(function getDisplayDate() {
  return moment(this.createdAt).format();
});

ImageSchema.virtual('displayUrl').get(function getDisplayUrl() {
  return `/images/${this.url}`;
});


/**
 * Register
 */

mongoose.model('Image', ImageSchema);
