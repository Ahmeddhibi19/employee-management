// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import employeeRoutes from './routes/employeeRoutes';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api', employeeRoutes);

app.use(errorHandler);

export default app;
