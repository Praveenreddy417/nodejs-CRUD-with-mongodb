// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  gender: String,
  salary: String
});

module.exports = mongoose.model('User', userSchema);