const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = require('./productsModels').ProductSchema;

//create product Schema
const CartSchema = new Schema({
    idmember: {
        type: String,
        required: [true, 'Name field is required']
    },
    cart: {
        type: [ProductSchema],
        default: []
    }
});

const cartModels = mongoose.model('carts', CartSchema);

module.exports = cartModels;