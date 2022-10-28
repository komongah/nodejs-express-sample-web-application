import { title, version } from '../package';

const config = {
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
