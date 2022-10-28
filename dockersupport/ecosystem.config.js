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
                LOG_LEVEL: 'info'
            }
        }
    ]
};
