const mongoose = require('mongoose');


const ThemeSchema =  new mongoose.Schema({
    title: String,
    theme: String,
    isPremium: Boolean
});



module.exports = mongoose.model('Themes', ThemeSchema)