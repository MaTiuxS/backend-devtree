import express from 'express';
import router from './routes/router';
import { connectDB } from './config/db';
import 'dotenv/config';
import cors from 'cors';
import { corsConfig } from './config/cors';

connectDB();

const app = express();

//Cors
app.use( cors( corsConfig ));

// Read form data
app.use( express.json() );

// Routes
app.use('/', router);


export default app;