const Expense = require("../models/expense.model");
const Group = require("../models/group.model");

const checkExpenseAccess = async (req,res,next) => {
    const id = req.id;
    const {expenseId} = req.params;

    try{
        const expense = await Expense.findById(expenseId);
        if(!expense || expense.length == 0){
            return res.status(404).json({
                error : "Expense not found"
            })
        }
        const hasAccess = expense.payees.some(user => user == id) ||  expense.sharedBy.some(user => user == id);
        // Check if expense is shared or paid user
        if(!hasAccess){
            return res.status(403).json({
                error : "You are not part of this expense"
            });
        }
        next();
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error fetching expense"
        })
    }
}

module.exports = checkExpenseAccess;