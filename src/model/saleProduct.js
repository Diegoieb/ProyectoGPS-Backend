'use strict'
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const saleProductSchema = schema(
    {
        product:[{
            type: schema.ObjectId,
            required: true
        }],
        sale:[{
            type: schema.ObjectId,
            required:true
        }],
        amountP:{
            type: Number,
            required:true
        },
        subTotal: {
            type:Number,
            required:true
        }
    }
)
module.exports = mongoose.model('saleProduct', saleProductSchema);