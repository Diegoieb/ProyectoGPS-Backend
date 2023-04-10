'use strict'
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = schema(
    {
        name: {
            type:String,
            required: true
        },
        description: {
            type:String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)
module.exports = mongoose.model('product',productSchema);
