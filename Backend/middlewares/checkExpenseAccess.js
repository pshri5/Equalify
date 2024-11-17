const Expense = require("../models/expense.model");
const Group = require("../models/group.model");

const checkExpenseAccess = async (req,res,next) => {
    const id = req.id;
    const {expenseId} = req.params;
    const {payees,sharedBy} = req.body; // This is for adding users in expense 
    try{
        // Fetch the expense for which the details are required
        const expense = await Expense.findById(expenseId);
        if(!expense || expense.length == 0){
            return res.status(404).json({
                error : "Expense not found"
            })
        }
        // Get the groupId of the expense and check if the user is memeber of the group
        const groupId = expense.groupId;
        const group = await Group.findById(groupId);
        const hasAccess = group.members.some(member => member._id.toString()=== id);
        // Check if expense is shared or paid user
        if(!hasAccess){
            return res.status(403).json({
                error : "You don't have access to this expense"
            });
        }

        // Check if the payees required to be added in the expense are part of the group
        const invalidPayee = payees ? payees.filter(payee => {
            return !group.members.some(member => member._id.toString() === payee)
        }) : [];

        // Check if the sharee required to be added in the expense are part of the group
        const invalidSharee = sharedBy ? sharedBy.filter(sharee => {
            return !group.members.some(member => member._id.toString() === sharee)
        }) : [];

        if(invalidPayee.length || invalidSharee.length){
            return res.status(403).json({
                error : "Users are not members of the group",
                payee : invalidPayee,
                sharee : invalidSharee
            })
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