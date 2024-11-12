const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const {authRouter} = require("./routes/authRoute");

dotenv.config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/v1/users",authRouter);
//app.use("/api/v1/expenses",expenseRouter);
//app.use("/api/v1/groups",groupRouter);

async function main(){
    await mongoose.connect(MONGO_DB_URL);
    app.listen(PORT);
    console.log(`Listening to ${PORT}`);
}

main();