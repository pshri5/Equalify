const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require('dotenv').config(); // Load environment variables from .env file

const {userRouter} = require("./routes/userRoute");
const {groupRouter} = require("./routes/groupRoute");
const {MONGO_DB_URL,PORT} = require("./config/envConfig");

app.use(cors());
app.use(express.json());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/groups",groupRouter);
//app.use("/api/v1/expenses",expenseRouter);

// Test Route
app.get("/test", (req, res) => {
  res.send("Your backend is good to go!");
});

(async function main() {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit with failure
  }
})();
