const mongoose = require("mongoose");
require("dotenv").config();


// .env
mongoose.connect(process.env.DB_STRING);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}