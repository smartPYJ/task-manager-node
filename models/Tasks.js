const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Fill somthing"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema)