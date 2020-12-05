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
<<<<<<< HEAD
            productId: {
=======
            product: {
>>>>>>> origin/Thominou
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

    if (product !== undefined) {
        const cart = this.cart;

<<<<<<< HEAD
        const index = cart.items.findIndex(obj => obj.productId.equals(productId))
        if (index >= 0) cart.items[index].qty++;
        else cart.items.push({ productId: product._id, qty: 1 });
=======
        const index = cart.items.findIndex(obj => obj.product.equals(productId))
        if (index >= 0) cart.items[index].qty++;
        else cart.items.push({ product: product._id, qty: 1 });
>>>>>>> origin/Thominou

        if (!cart.totalPrice)
            cart.totalPrice = 0;

<<<<<<< HEAD
        cart.totalPrice += product.price;

        this.save();

=======
        this.save();
>>>>>>> origin/Thominou
        return this.cart;
    }

};

userSchema.methods.removeFromCart = async function(productId) {
    const product = await Products.findById(productId);
    const cart = this.cart;
<<<<<<< HEAD
    const index = cart.items.findIndex(obj => obj.productId.equals(productId))
=======
    const index = cart.items.findIndex(obj => obj.product.equals(productId))
>>>>>>> origin/Thominou

    if (product !== undefined) {
        if (index >= 0) {
            if (cart.items[index].qty > 1) cart.items[index].qty--;
            else cart.items.splice(index, 1);

<<<<<<< HEAD
            cart.totalPrice -= product.price;

            this.save();

=======
            this.save();
>>>>>>> origin/Thominou
            return this.cart;
        }
    }
}

const UserModels = mongoose.model('users', userSchema);
module.exports = UserModels;