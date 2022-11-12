module.exports = {
    apps: [
        {
            name: 'sample-web-application',
            script: 'yarn run:server',
            watch: true,
            ignore_watch: ['node_modules', '.idea', 'dockersupport', 'logs', 'coverage', '.nyc_output'],
            env: {
                NODE_ENV: 'development',
                PORT: 8080,
                LOG_LEVEL: 'debug',
                AUTH_SECRET: 'sample_web_application_secret',
                AUTH_EXPIRATION_TIME_IN_MILLIS: 1800000,
                SWAGGER_UI_USERNAME: 'admin',
                SWAGGER_UI_PASSWORD: 'password',
                DB_CONNECTION_STRING: 'mongodb://localhost:27017/sample-web-application'
            }
        }
    ]
};
