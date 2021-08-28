const mongoose = require("mongoose");
const {
    Schema
} = mongoose;


let Track = new mongoose.Schema({
        Track_name: {
            type: String,
            required: true
        },
        Album_title: {
            type: mongoose.Types.ObjectId,
            ref: "Album",
        },
        Artist_name: {
            type: mongoose.Types.ObjectId,
            ref: "Artist",
            required: true
        },
        genre: {
            type: String,
            enum: String,
            required: true
        },
        lang: {
            default: "EN",
            type: String,
            enum: ["EN", "JP", "FR", "AR", "DU", "SP"]
        },
        release: {
            type: Date,
            required: true
        },
        writer: {
            type: [String]
        },
        length: {
            type: Number
        },
        Lyrics: {
            type: String
        },
        rated: {
            // ch7al men merra users rated the song
            type: Number
        },
        rating: {
            // la moyenne ta3 rates kamel 
            type: Number
        },
        Loundness:{
            type: Number
        },
        Danceability: {
            type: Number
        },
        Energy: {
            type: Number
        },
        BPM: {
            type: Number
        },
        mood: {
            type: String,
            enum: ["Sad","Happy","Party","Love"] // redefine 
        }
    }),
    Album = new mongoose.Schema({
        Album_title: {
            type: String,
            required: true
        },
        Genre: {
            type: String,
            required: true
        },
        Number_of_tracks: {
            type: Number,
            required: true
        },
        Album_length: {
            type: Number,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
        Number_of_sales: {
            type: Number,
            required: true
        },
        list_of_Tracks: {
            type: String,
            required: true
        },
        Critics: {
            type: String,
            required: true
        },
    })
