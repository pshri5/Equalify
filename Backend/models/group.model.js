const mongoose = require('mongoose');
const userModel = require('./user.model');
const Schema = mongoose.Schema;


// Group Schema
const groupSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    member : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
    }]
}, {timestamps : true}
)

const Group = mongoose.model("Group",groupSchema);

module.exports = Group;