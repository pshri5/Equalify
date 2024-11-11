const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Group Schema
const Group = new Schema({
    name : String,
    members : [ObjectId]
}, {timestamps : true}
)

export const groupModel = mongoose.model("group",groupModel);