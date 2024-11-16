const {Router} = require("express");
const {createSchema,updateSchema} = require("../validations/expenseValidation");
const {createExpense,getExpenses,getExpense,updateExpense,deleteExpense} = require("../controllers/expenseController");
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
expenseRouter.get("/",checkAuth,getExpenses);
expenseRouter.get("/:expenseId",checkAuth,checkExpenseAccess,getExpense);
expenseRouter.put("/:expenseId",schemaValidator(updateSchema),checkAuth,checkExpenseAccess,updateExpense);
expenseRouter.delete("/:expenseId",checkAuth,checkExpenseAccess,deleteExpense);

module.exports = {
    expenseRouter : expenseRouter
}