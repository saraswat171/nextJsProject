const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true 
    },
  


},{timestamps:true })

module.exports = mongoose.model('list', listSchema)