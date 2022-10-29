import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import constants from './utils/constants';
import config from './app.config';

import './auth/passport.setup';

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

// Security
const swaggerUiHttpBasicAuth = passport.authenticate('swaggerUiHttpBasicAuth', { session: false });
const oauth2TokenAuthenticate = passport.authenticate('oauth2BearerToken', { session: false });
const authenticationStrategies = [oauth2TokenAuthenticate];

// Routes
app.use(constants.ROUTE.HEALTH_CHECK, authenticationStrategies, healthCheckRouter);
app.use(constants.ROUTE.API_DOCS_SWAGGER_JSON, swaggerUiHttpBasicAuth, (req, res) => res.send(swaggerJsonDoc));
app.use(constants.ROUTE.API_DOCS_SWAGGER, swaggerUiHttpBasicAuth, swaggerUi.serve, swaggerUi.setup(swaggerJsonDoc));

app.use(constants.ROUTE.API_DOCS, swaggerUiHttpBasicAuth, (req, res) =>
    res.sendFile(path.join(__dirname, '../docs/sample-web-application-api-docs.html'))
);

// Exception Handlers
app.use((req, res) => {
    const status = 404;
    const message = 'Not found!';

    return res.status(status).json({
        status,
        message
    });
});
app.use((req, res) => {
    const status = 500;
    const message = 'Internal Server Error!';

    return res.status(status).json({
        status,
        message
    });
});

export default app;
