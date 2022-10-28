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
                LOG_LEVEL: 'debug'
            }
        }
    ]
};
