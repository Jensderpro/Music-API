const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

let Artist = new mongoose.Schema({
    realName: {
        type: String,
    },
    artName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    yearBirth: {
        type: Date,
    },
    instruments: {
        type: String,
    },
    City: {
        type: String,
    },
    Country: {
        type: String,
    },
    isArtist: {
        type: Boolean,
        default: false
    }
}),


// xxv3meZoDFHTd1iK

// 105.97.61.112