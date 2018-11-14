/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
  url: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type : String, required: true },
  metadata: { type: String, required: true }
});


 /**
 * Register
 */

mongoose.model('Image', Image);