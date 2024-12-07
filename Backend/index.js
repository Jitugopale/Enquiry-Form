// app.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';  // Make sure to add .js extension
import connectDB from './db/db.js';  // Same for db.js

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Use the routes from authRoutes.js
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
