const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const {userRouter} = require("./routes/userRoute");
const {groupRouter} = require("./routes/groupRoute");
const {MONGO_DB_URL,PORT} = require("./config/envConfig");

app.use(cors());
app.use(express.json());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/groups",groupRouter);
//app.use("/api/v1/expenses",expenseRouter);

async function main(){
    await mongoose.connect(MONGO_DB_URL);
    app.listen(PORT);
    console.log(`Listening to ${PORT}`);
}

main();