const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    number: Number,
    nameOfGuest: String,
    roomSatus: String,
    obs: String
  });

  module.exports = mongoose.model('room', roomSchema)