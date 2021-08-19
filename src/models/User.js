const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },

  lastName: {
    type: String,
    require: true
  },

  email: String,

  active: {
    type: Boolean,
    require: true
  },
})

module.exports = mongoose.model('User', schema)