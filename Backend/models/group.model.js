const mongoose = require('mongoose');
const User = require('./user.model');



// Group Schema
const groupSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    members : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        // This will check if the provided id exists in User model
        validate: {
            validator : async function (value) {
                return await User.exists({_id : value})
            }
        }
    }]
}, {timestamps : true}
)

const Group = mongoose.model("Group",groupSchema);

module.exports = Group;