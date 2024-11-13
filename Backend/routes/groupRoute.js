const {Router} = require("express");

const checkAuth = require("../middlewares/checkAuth");
const {createGroup} = require("../controllers/groupContoller");
const {createSchema} = require("../validations/groupValidation");
const schemaValidator = require("../middlewares/schemaValidator");

const groupRouter = Router();

groupRouter.post("/create",schemaValidator(createSchema),checkAuth,createGroup);

module.exports = {
    groupRouter : groupRouter
}