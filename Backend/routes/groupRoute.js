const {Router} = require("express");

const checkAuth = require("../middlewares/checkAuth");
const checkGroupAccess = require("../middlewares/checkGroupAccess");
const {createGroup,listGroups,getGroup,updateGroup,deleteGroup,addMember} = require("../controllers/groupContoller");
const {createSchema} = require("../validations/groupValidation");
const schemaValidator = require("../middlewares/schemaValidator");

const groupRouter = Router();

groupRouter.post("/",schemaValidator(createSchema),checkAuth,createGroup);
groupRouter.get("/",checkAuth,listGroups);
groupRouter.get("/:groupId",checkAuth,checkGroupAccess,getGroup);
groupRouter.put("/:groupId",checkAuth,checkGroupAccess,updateGroup);
groupRouter.delete("/:groupId",checkAuth,checkGroupAccess,deleteGroup);
//groupRouter.post("/:groupId",checkAuth,checkGroupAccess,addMember);

module.exports = {
    groupRouter : groupRouter
}