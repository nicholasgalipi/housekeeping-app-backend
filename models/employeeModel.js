const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    roomsAssigned: [String],
  },{
    timestamps:true,
  });

  module.exports = mongoose.model('employee', employeeSchema)