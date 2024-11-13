const dotenv = require("dotenv");
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 3000;

module.exports = {
    MONGO_DB_URL,
    JWT_USER_PASSWORD,
    PORT
}