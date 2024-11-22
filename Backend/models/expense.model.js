const mongoose = require('mongoose');
const User = require('./user.model');
const Group = require('./group.model');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    name :{
        type: String,
        required: true,
    },
    amount :{
        type: Number,
        required: true,
    },
    isSettled : {
        type: Boolean,
        required: true,
    },
    payees : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required:true,
            // This will check if the provided id exists in User model
            validate: {
                validator : async function (value) {
                    return await User.exists({_id : value})
                }
            }
        }
    ],
    sharedBy : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
            required: true,
            // This will check if the provided id exists in User model
            validate: {
                validator : async function (value) {
                    return await User.exists({_id : value})
                }
            }
        }
    ],
    groupId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Group,
        required : true,
        // This will check if the provided id exists in User model
        validate: {
            validator : async function (value) {
                return await Group.exists({_id : value})
            }
        }
    },
    
}, {timestamps : true}
)

const Expense = mongoose.model("Expense",expenseSchema);

module.exports = Expense;