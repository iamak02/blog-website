const mongoose = require('mongoose')

// Define Schema
const CategorySchema = new mongoose.Schema({
    category_name: { type: String, required: true, trim: true }
}, { timestamps: true })

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel