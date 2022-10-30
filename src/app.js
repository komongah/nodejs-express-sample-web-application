import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';

import './auth/passport.setup';
import constants from './utils/constants';
import { healthCheckRouter, redocRouter, swaggerRouter, swaggerJsonRouter } from './routers';

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

// Security
const swaggerUiHttpBasicAuth = passport.authenticate('swaggerUiHttpBasicAuth', { session: false });
const oauth2TokenAuthenticate = passport.authenticate('oauth2BearerToken', { session: false });
const authenticationStrategies = [oauth2TokenAuthenticate];

// Routes
// Docs
app.use(constants.ROUTE.API_DOCS_SWAGGER_JSON, swaggerUiHttpBasicAuth, swaggerJsonRouter);
app.use(constants.ROUTE.API_DOCS_SWAGGER, swaggerUiHttpBasicAuth, swaggerUi.serve, swaggerRouter);
app.use(constants.ROUTE.API_DOCS, swaggerUiHttpBasicAuth, redocRouter);

// Endpoints
app.use(constants.ROUTE.HEALTH_CHECK, authenticationStrategies, healthCheckRouter);

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
