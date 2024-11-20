const Expense = require("../models/expense.model");

/**
 * Currently there is no check to verify if 
 * user is part of the group for which he is trying to add an expense
 */
exports.createExpense = async (req,res) => {
    const {name,amount,payees,sharedBy,groupId} = req.body;
    try{
        await Expense.create({
            name,
            amount,
            isSettled : false,
            payees,
            sharedBy,
            groupId
        })
        return res.status(200).json({
            message : "The expense has been created!"
        });
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Unable to create expense"
        })
    }
}

// Show the user all the expenses he is part of i.e. paid by or shared by
exports.getExpenses = async(req,res) => {
    const id = req.id;
    try{
        const expenses = await Expense.find({
            $and : [
                {
                    $or: [
                        {"sharedBy" : id},
                        {"payee" : id}
                    ]
                },
                {"isSettled" : false}
            ]
        })
        .populate('payees','name')
        .populate('sharedBy','name')
        .select('-createdAt -updatedAt -__v');
        return res.status(200).json(expenses)
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error fetching expenses"
        })
    }
}

// Get expense by expense id
exports.getExpense = async (req,res) => {
    const {expenseId} = req.params;
    try{
        const expense = await Expense.find({
            _id : expenseId
        })
            .populate('payees','name')
            .populate('sharedBy','name')
            .select('-createdAt -updatedAt -__v');
        return res.status(200).json(expense);
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error fetching expense"
        })
    }
}

// Updated expense, only name and amount update supported as of now
exports.updateExpense = async (req,res) => {
    const {expenseId} = req.params;
    const {name,amount,isSettled} = req.body;
    const updateFields = {};

    if(name){
        updateFields.name = name;
    }
    if(amount){
        updateFields.amount = amount;
    }
    if(isSettled == true | isSettled == false){
        updateFields.isSettled = isSettled;
    }

    try{
        const expense = await Expense.findByIdAndUpdate(
            expenseId,
            {$set : updateFields},
            {new : true} // this will make sure that update response is returned
        )
        .populate('payees','name')
        .populate('sharedBy','name')
        .select('-createdAt -updatedAt -__v');

        return res.status(200).json({
            expense
        })
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error updating the expense"
        })
    }
}

// Delete an expense
exports.deleteExpense = async (req,res)=> {
    const {expenseId} = req.params;
    try{
        await Expense.findByIdAndDelete(expenseId);
        return res.status(200).json({
            message : "The expense is deleted"
        })
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error deleting expense"
        })
    }
}

exports.addUsers = async (req,res) => {
    const {expenseId} = req.params;
    const {payees,sharedBy} = req.body;
    try{
        const expense = await Expense.findByIdAndUpdate(expenseId,
            {
                "$addToSet" : {
                    payees : {
                        "$each" : payees || [] // Add list of payees if not already present
                    },
                    sharedBy : {
                        "$each" : sharedBy || [] // Add list of sharedBy if not already present
                    }
                }
            },
            {new : true}
        )
        .populate('payees','name')
        .populate('sharedBy','name')
        .select('-createdAt -updatedAt -__v');
        return res.json(expense);
    } catch(error) {
        console.log(error);
        res.status(400).json({
            error : "Error updating the expense"
        })
    }

    return res.json({message : "Adding users"});
}

exports.removeUsers = async(req,res) => {
    const {expenseId} = req.params;
    const {payees,sharedBy} = req.body;

    try {
        const expense = await Expense.findByIdAndUpdate(
            expenseId,
            {
                '$pull' : {
                    payees : {
                        '$in' : payees || [] // Remove the payees from the provided list
                    },
                    sharedBy : {
                        '$in' : sharedBy || [] // Remove the sharedBy from the provided list
                    }
                }
            },
            {new : true}
        )
        .populate('payees','name')
        .populate('sharedBy','name')
        .select('-createdAt -updatedAt -__v');

        return res.json(expense);
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error updating expense"
        });
    }
}