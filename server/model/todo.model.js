const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
    todo: {
        todo: { type: String, required: true },
        date: { type: Date, required: true }
    }
}, {
    timestamps: true
})
const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo;