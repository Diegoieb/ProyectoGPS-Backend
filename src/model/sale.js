'use strict'
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const saleSchema = schema (
    {
        date: {
            type:Date,
            required: true
        },
        total: {
            type:Number,
            required: true
        },
        user: [{
            type: schema.ObjectId,
            ref:"user"
        }]
    }
)
module.exports = mongoose.model('sale',saleSchema);  