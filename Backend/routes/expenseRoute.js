const {Router} = require("express");
const {createSchema,updateSchema,editUsersSchema} = require("../validations/expenseValidation");
const {createExpense,getExpenses,getExpense,updateExpense,deleteExpense,addUsers,removeUsers} = require("../controllers/expenseController");
const schemaValidator = require("../middlewares/schemaValidator");
const checkAuth = require("../middlewares/checkAuth");
const checkGroupAccess = require("../middlewares/checkGroupAccess");
const checkExpenseAccess = require("../middlewares/checkExpenseAccess");
const expenseRouter = Router();

/**
 * Many vunerabilities here regarding access of user authorized to make any changes
 * Need to create a middleware for same (might need changes in route setup)
 */
expenseRouter.post("/",schemaValidator(createSchema),checkAuth,checkGroupAccess,createExpense);
expenseRouter.get("/",checkAuth,getExpenses);  // This doesn't require to verify the access since only expenses user is involved in will be fetched
expenseRouter.get("/:expenseId",checkAuth,checkExpenseAccess,getExpense);
expenseRouter.put("/:expenseId",schemaValidator(updateSchema),checkAuth,checkExpenseAccess,updateExpense); // Updates only name and amount
expenseRouter.delete("/:expenseId",checkAuth,checkExpenseAccess,deleteExpense);
expenseRouter.put("/:expenseId/users",schemaValidator(editUsersSchema),checkAuth,checkExpenseAccess,addUsers);
expenseRouter.delete("/:expenseId/users",schemaValidator(editUsersSchema),checkAuth,checkExpenseAccess,removeUsers);

module.exports = {
    expenseRouter : expenseRouter
}