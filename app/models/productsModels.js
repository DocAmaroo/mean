const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create product Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    type: {
        type: String
    },
    price: {
        type: Number,
        default: 0.00
    },
    marque: {
        type: String
<<<<<<< HEAD
    },
    img: {
        type : String,
        default: "https://www.labaleine.fr/sites/default/files/image-not-found.jpg"
=======
>>>>>>> Thominou
    }
});

const productModels = mongoose.model('products', ProductSchema);

module.exports = productModels;