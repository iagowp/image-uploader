const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const connect = () => {
  const options = { useNewUrlParser: true };
  mongoose.connect(process.env.DB, options);
};
connect();

/**
 * Bootstrap models
 */
fs.readdirSync(`${__dirname}/../app/models`).forEach((file) => {
  if (file.indexOf('.js') !== -1) {
    require(path.join(__dirname, '/../app/models/', file));
  }
});


mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
