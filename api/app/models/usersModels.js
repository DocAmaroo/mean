const Products = require('../models/productsModels')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create product Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            qty: {
                type: Number,
                default: 0,
                required: true
            }
        }],
        totalPrice: Number
    }
});


userSchema.methods.addToCart = async function(productId) {
    const product = await Products.findById(productId);

    if (product) {
        const cart = this.cart;

        const index = cart.items.findIndex(obj => obj.productId.equals(productId))
        if (index >= 0) cart.items[index].qty += 1;
        else cart.items.push({ productId: product._id, qty: 1 });

        if (!cart.totalPrice)
            cart.totalPrice = 0;

        cart.totalPrice += product.price;
        
        console.log(cart);
        return this.save();
    }

};

userSchema.methods.removeFromCart = function(productId) {
    const cart = this.cart;
    const index = cart.items.findIndex(obj => obj.productId.equals(productId))
    if (index >= 0) {
        cart.items.splice(index, 1);
        return this.save();
    }
}

const UserModels = mongoose.model('users', userSchema);
module.exports = UserModels;