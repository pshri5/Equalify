const {Router} =  require("express");
const { registerSchema,loginSchema } = require("../validations/authValidation");
const {register,signin} = require("../controllers/authController");
const {validator } = require("../middlewares/validator");

const authRouter = Router();

authRouter.post("/register",validator(registerSchema),register);
authRouter.post("/login",validator(loginSchema),signin);

module.exports = {
    authRouter : authRouter
}