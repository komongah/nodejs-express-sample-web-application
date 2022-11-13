import { Strategy } from 'passport-http-bearer';
import { verify } from 'jsonwebtoken';
import config from '../../app.config';
import { AuthService } from '../../services/AuthService';
import logger from '../../utils/logger';

function OAuth2Strategy() {
    return new Strategy((token, done) => {
        AuthService.AccessToken = null;

        if (!token) {
            return done(null, false, { message: 'Unauthorized!', scope: '' });
        }

        try {
            const { auth } = config;
            const { secret, expirationTimeInMillis } = auth;
            const decoded = verify(token, secret, {
                algorithms: ['HS256']
            });

            if (
                !decoded ||
                !decoded.origin ||
                !decoded.expiration // In seconds
            ) {
                return done(null, false, { message: 'Unauthorized!', scope: '' });
            }

            // Expiration check
            const tokenExpirationTime = Number(decoded.expiration) * 1000 + Number(expirationTimeInMillis);
            const now = Date.now();

            if (now > tokenExpirationTime) {
                return done(null, false, { message: 'Unauthorized!', scope: '' });
            }

            AuthService.AccessToken = token;

            // Authorized
            return done(null, decoded);
        } catch (err) {
            logger.error(err);
        }

        return done(null, false, { message: 'Unauthorized!', scope: '' });
    });
}

export { OAuth2Strategy };
