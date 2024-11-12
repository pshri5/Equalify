const mongoose = require('mongoose');
const User = require('./user.model');
const Group = require('./group.model');
const Schema = mongoose.Schema;


const expenseSchema = new Schema({
    expenseName :{
        type: String,
        required: true,
    },
    expenseAmount :{
        type: Number,
        required: true,
    },
    expenseOwner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required:true
    },
    expenseMember : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
            required: true
        }
    ],
    userGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Group
    },
    
}, {timestamps : true}
)

const Expense = mongoose.model("Expense",expenseSchema);

module.exports = Expense;