const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config/envConfig");

const checkAuth = (req,res,next) => {
    const token = req.headers.token;
    try {
        const validToken = jwt.verify(token,JWT_USER_PASSWORD);
        if(!validToken){
            return res.status(403).json({
                error : "You are not authenticated!"
            })
        }
        req.id = validToken.id;
        next();
    } catch(error){
        return res.status(403).json({
            error : "You are not authenticated!"
        })
    }
}

module.exports = checkAuth;