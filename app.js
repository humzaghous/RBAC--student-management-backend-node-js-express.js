
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const { errorHandler } = require('./middleware/errorMiddleware'); 

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);

// Error handling middleware
app.use(errorHandler); 

module.exports = app;
