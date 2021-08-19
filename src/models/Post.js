const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },

  content: {
    type: String,
    require: true
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Post', schema)



