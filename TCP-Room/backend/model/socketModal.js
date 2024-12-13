const mongoose = require("mongoose");

module.exports = mongoose.model(
    "socket",

    new mongoose.Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })
)