const {Router} =  require("express");
const {registerSchema,loginSchema,profileSchema} = require("../validations/authValidation");
const {register,login,getProfile,setProfile} = require("../controllers/userController");
const schemaValidator = require("../middlewares/schemaValidator");
const checkAuth = require("../middlewares/checkAuth");

const userRouter = Router();

userRouter.post("/register",schemaValidator(registerSchema),register);
userRouter.post("/login",schemaValidator(loginSchema),login);
userRouter.get("/profile",checkAuth,getProfile);
userRouter.put("/profile",schemaValidator(profileSchema),checkAuth,setProfile);

module.exports = {
    userRouter : userRouter
}