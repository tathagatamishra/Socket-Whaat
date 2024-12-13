const mongoose = require("mongoose");

module.exports = mongoose.model(
    "room",

    new mongoose.Schema({
        roomID: {
            type: String,
            unique: true,
            required: true
        }
    }))