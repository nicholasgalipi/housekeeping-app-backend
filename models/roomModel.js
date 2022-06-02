const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    number: {type: Number, unique: true},
    nameOfGuest: String,
    roomStatus: String,
    obs: String,
    assigned: Boolean,
    assignedTo: String
  });

  module.exports = mongoose.model('room', roomSchema)