const mongoose = require('mongoose');
const fs = require('fs');

const connect = function () {
  const options = { useNewUrlParser: true };
  mongoose.connect(process.env.DB, options);
};
connect();

/**
 * Bootstrap models
 */
fs.readdirSync(__dirname + '/../app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/../app/models/' + file);
});


mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);