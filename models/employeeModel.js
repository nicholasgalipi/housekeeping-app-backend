const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    roomsAssigned: [String],
  });

  module.exports = mongoose.model('employee', employeeSchema)