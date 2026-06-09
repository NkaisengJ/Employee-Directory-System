const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    
    id: {
    type: Number,
    required: true,
    unique: true
  },

    name: {
    type: String,
    required: true,
    trim: true
  },

  surname: {
    type: String,
    required: true,
    trim: true
  },

  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Others']
  },

  department: {
    type: String,
    required: true,
    trim: true
  },

  salary: {
    type: Number,
    required: true,
     default: 0
  }

});



module.exports = mongoose.model('Employee', employeeSchema);