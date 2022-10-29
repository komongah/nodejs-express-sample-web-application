module.exports = {
    apps: [
        {
            name: 'sample-web-application',
            script: 'yarn run:server',
            cwd: '/app',
            watch: false,
            ignore_watch: ['node_modules', '.idea', 'dockersupport', 'logs', 'coverage', '.nyc_output'],
            env: {
                NODE_ENV: 'production',
                PORT: 8080,
                LOG_LEVEL: 'info',
                AUTH_SECRET: 'sample_web_application_secret',
                AUTH_EXPIRATION_TIME_IN_MILLIS: 1800000,
                SWAGGER_UI_USERNAME: 'admin',
                SWAGGER_UI_PASSWORD: 'password'
            }
        }
    ]
};
