// src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./auth');
const { connect } = require('mongoose');
import authRoutes from "./routes/auth.route.js";
import  connectMongoDB from"./db/connectMongoDB.js";
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
console.log(process.env.MONGO_URI)
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{ console.log(`Server running on port ${PORT}`);
connectMongoDB();});
