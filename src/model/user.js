'use strict'
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = schema(
    {
        name:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model('user', userSchema);