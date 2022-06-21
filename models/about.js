const mongoose = require('mongoose');

//define schema
const AboutSchema = new mongoose.Schema({
    content: { type: String, require: true, trim: true }
}, { timestamps: true })

const AboutModel = mongoose.model('about', AboutSchema);

module.exports = AboutModel;