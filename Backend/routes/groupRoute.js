const {Router} = require("express");

const {checkAuth} = require("../middlewares/checkAuth");

const groupRouter = Router();

groupRouter.post("/groups",checkAuth,)