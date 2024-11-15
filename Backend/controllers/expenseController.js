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

/**
 * Need to check if expenses with user as payee also need to be included
 */
exports.getExpenses = async(req,res) => {
    const id = req.id;
    try{
        const expenses = await Expense.find({
            "sharedBy" : id
        });
        return res.status(200).json(expenses)
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error fetching expenses"
        })
    }
}

// Get expense by expense id
// There is no check to verify if user should have access to the expense
exports.getExpense = async (req,res) => {
    const {expenseId} = req.params;
    try{
        const expense = await Expense.findById(expenseId);
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
    const {name,amount} = req.body;
    const updateFields = {};

    if(name){
        updateFields.name = name;
    }

    if(amount){
        updateFields.amount = amount
    }

    try{
        const expense = await Expense.findByIdAndUpdate(
            expenseId,
            {$set : updateFields},
            {new : true} // this will make sure that update response is returned
        )
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