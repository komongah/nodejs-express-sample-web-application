import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize application
const app = express();
app.disable('x-powered-by');

// Middlewares
app.use(cors());
app.use(
    bodyParser.json({
        type: 'application/json',
        limit: '100mb'
    })
);

export default app;
