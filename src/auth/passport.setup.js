import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import OAuth2Strategy from './strategies/oauth2.strategy';
import config from '../app.config';

passport.use('oauth2BearerToken', OAuth2Strategy());

// API Docs: Basic HTTP Auth
passport.use(
    'swaggerUiHttpBasicAuth',
    new BasicStrategy((username, password, done) => {
        const { swaggerUiAuth } = config.auth;
        if (swaggerUiAuth.username === username && swaggerUiAuth.password === password) {
            return done(null, username);
        }

        return done(null, false);
    })
);
