import { title, version } from '../package';

const config = {
    auth: {
        secret: process.env.AUTH_SECRET || 'sample_web_application_secret',
        expirationTimeInMillis: process.env.AUTH_EXPIRATION_TIME_IN_MILLIS || 1800000, // Default 30 minutes
        swaggerUiAuth: {
            username: process.env.SWAGGER_UI_USERNAME || 'admin',
            password: process.env.SWAGGER_UI_PASSWORD || 'password'
        }
    },
    app: {
        port: process.env.PORT || '8080',
        logLevel: process.env.LOG_LEVEL || 'info',
        swaggerOptions: {
            swaggerDefinition: {
                openapi: '3.0.1',
                info: {
                    title,
                    version,
                    description: 'Sample Web Application API Documentation',
                    contact: {
                        name: 'Komongah',
                        email: 'komongah@gmail.com'
                    },
                    'x-displayName': 'Sample Web Application API'
                },
                basePath: '/'
            },
            apis: ['./src/**/*.js']
        }
    }
};

export default config;
