import express from 'express';
import morgan from 'morgan';
import './db/database.js';
import authRoutes from './routes/auth.routes.js';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
//Usamos las rutas
app.use('/api', authRoutes);
export default app;