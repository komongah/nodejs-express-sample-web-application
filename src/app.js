import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';

import constants from './utils/constants';
import { healthCheckRouter, redocRouter, swaggerRouter, swaggerJsonRouter } from './routers';
import notFoundExceptionHandler from './exceptions/handlers/notFoundExceptionHandler';
import exceptionHandler from './exceptions/handlers/exceptionHandler';
import { OAuth2Strategy } from './auth/strategies/oauth2.strategy';
import { Strategy } from './auth/strategies/basic.strategy';

function initialize() {
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
    passport.use('oauth2BearerToken', OAuth2Strategy());
    // API Docs: Basic HTTP Auth
    passport.use('swaggerUiHttpBasicAuth', Strategy());

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
    app.use(notFoundExceptionHandler);
    app.use(exceptionHandler);

    return app;
}

export { initialize };
