const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    number: Number,
    nameOfGuest: String,
    roomStatus: String,
    obs: String
  },{
    timestamps:true,
  });

  module.exports = mongoose.model('room', roomSchema)