const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// User Schema
const User = new Schema({
    name : String,
    email : {type : String, unique : true},
    password : String,
    createdAt : Date,
    updatedAt : Date
})

export const userModel = mongoose.model("user",User);