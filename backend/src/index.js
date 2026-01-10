import express from "express";
import dotenv from "dotenv";

import authRoutes  from "./routes/auth.route.js";
import messageRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Start server only after DB connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to start server:", error.message);
  });
