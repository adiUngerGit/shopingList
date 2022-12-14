const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number
    },
    img: {
        type: String,
    },
}, {autoCreate: true});

const myDB = mongoose.connection.useDb('products');

const Product = mongoose.model('product', productSchema);

exports = module.exports = Product;