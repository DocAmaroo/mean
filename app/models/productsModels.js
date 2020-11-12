const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create product Schema
const ProductSchema = new Schema({
    nom: {
        type: String,
        required: [true, 'Name field is required']
    },
    type: {
        type: String
    },
    prix: {
        type: Number,
        default: 0.00
    },
    marque: {
        type: String
    }
});

const productModels = mongoose.model('products', ProductSchema);

module.exports = productModels;