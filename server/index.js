const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

// DB Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API Running Babyyy!!!...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
