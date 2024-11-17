const {Router} = require("express");

const checkAuth = require("../middlewares/checkAuth");
const checkGroupAccess = require("../middlewares/checkGroupAccess");
const {createGroup,listGroups,getGroup,updateGroup,deleteGroup,addMember,deleteMember} = require("../controllers/groupContoller");
const {createSchema,memberSchema} = require("../validations/groupValidation");
const schemaValidator = require("../middlewares/schemaValidator");

const groupRouter = Router();

groupRouter.post("/",schemaValidator(createSchema),checkAuth,createGroup);
groupRouter.get("/",checkAuth,listGroups);
groupRouter.get("/:groupId",checkAuth,checkGroupAccess,getGroup);
groupRouter.put("/:groupId",schemaValidator(createSchema),checkAuth,checkGroupAccess,updateGroup);
groupRouter.delete("/:groupId",checkAuth,checkGroupAccess,deleteGroup);
groupRouter.put("/:groupId/members",schemaValidator(memberSchema),checkAuth,checkGroupAccess,addMember);
groupRouter.delete("/:groupId/members",schemaValidator(memberSchema),checkAuth,checkGroupAccess,deleteMember);

module.exports = {
    groupRouter : groupRouter
}