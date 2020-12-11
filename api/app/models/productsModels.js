const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create product Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: [true, 'Name field is required']
    },
    categorie: {
        type: String
    },
    description: {
        type: String,
        index: true
    },
    price: {
        type: Number,
        index: true,
        default: 0.00
    },
    marque: {
        type: String,
        index: true
    },
    img: {
        type : String,
        default: "https://www.labaleine.fr/sites/default/files/image-not-found.jpg"
    }
});

const productModels = mongoose.model('products', ProductSchema);

module.exports = productModels;