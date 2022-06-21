const mongoose = require('mongoose');

//define schema
const ImageSchema = new mongoose.Schema({
    tittle: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true }
}, { timestamps: true })

const ImageModel = mongoose.model('image', ImageSchema);

module.exports = ImageModel;