const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    fname: String,
    lname: String
}, { collection: "users" })

module.exports = mongoose.model('Users', userSchema)