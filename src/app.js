import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import constants from './utils/constants';

import { healthCheckRouter } from './routers';

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

// Routes
app.use(constants.ROUTE.HEALTH_CHECK, healthCheckRouter);

export default app;
