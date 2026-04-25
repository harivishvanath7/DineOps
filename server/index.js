import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"

dotenv.config();

import authRoutes from "./routes/authRoutes.js";

const app = express();

// DB Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API Running Babyyy!!!...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
