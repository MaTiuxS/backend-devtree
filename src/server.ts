import express from 'express';
import router from './routes/router';
import { connectDB } from './config/db';
import 'dotenv/config';



const app = express();

connectDB();
// Read form data
app.use( express.json() );

// Routes
app.use('/', router);


export default app;