const {Router} = require("express");
const {createSchema,updateSchema} = require("../validations/expenseValidation");
const {createExpense,getExpenses,getExpense,updateExpense,deleteExpense} = require("../controllers/expenseController");
const schemaValidator = require("../middlewares/schemaValidator");
const checkAuth = require("../middlewares/checkAuth");
const expenseRouter = Router();

/**
 * Many vunerabilities here regarding access of user authorized to make any changes
 * Need to create a middleware for same (might need changes in route setup)
 */
expenseRouter.post("/",schemaValidator(createSchema),checkAuth,createExpense);
expenseRouter.get("/",checkAuth,getExpenses);
expenseRouter.get("/:expenseId",checkAuth,getExpense);
expenseRouter.put("/:expenseId",schemaValidator(updateSchema),checkAuth,updateExpense);
expenseRouter.delete("/:expenseId",deleteExpense);

module.exports = {
    expenseRouter : expenseRouter
}