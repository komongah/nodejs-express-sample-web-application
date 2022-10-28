module.exports = {
    apps: [
        {
            name: 'sample-web-application',
            script: 'yarn run:server',
            cwd: '/app',
            watch: false,
            ignore_watch: ['node_modules', '.idea', 'dockersupport'],
            env: {
                NODE_ENV: 'production',
                PORT: 8080
            }
        }
    ]
};
