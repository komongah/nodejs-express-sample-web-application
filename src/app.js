import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import constants from './utils/constants';
import config from './app.config';

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

const { swaggerOptions = {} } = config.app;
const swaggerJsonDoc = swaggerJsDoc(swaggerOptions);

// Routes
app.use(constants.ROUTE.HEALTH_CHECK, healthCheckRouter);
app.use(constants.ROUTE.API_DOCS_SWAGGER_JSON, (req, res) => res.send(swaggerJsonDoc));
app.use(constants.ROUTE.API_DOCS, swaggerUi.serve, swaggerUi.setup(swaggerJsonDoc));

export default app;
