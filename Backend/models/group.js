const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Group Schema
const Group = new Schema({
    name : String,
    members : [ObjectId],
    createdAt : Date,
    updatedAt : Date
})

export const groupModel = mongoose.model("group",groupModel);