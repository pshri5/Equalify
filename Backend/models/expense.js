const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Expense Schema
const Expense = new Schema({
    name : String,
    amount : Number,
    paidBy : ObjectId,
    sharedBy : [
        {
            userId : ObjectId,
            share : Number
        }
    ],
    groupId : ObjectId
}, {timestamps : true}
)

export const expenseModel = mongoose.model("expense",Expense);