import { BasicStrategy } from 'passport-http';
import config from '../../app.config';

function Strategy() {
    return new BasicStrategy((username, password, done) => {
        const { swaggerUiAuth } = config.auth;
        if (swaggerUiAuth.username === username && swaggerUiAuth.password === password) {
            return done(null, username);
        }

        return done(null, false);
    });
}

export { Strategy };
