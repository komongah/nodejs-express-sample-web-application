import config from './app.config';
import logger from './utils/logger';
import { setupMongoose } from './setup.mongoose';
import { initialize } from './app';

const port = config.app.port;

setupMongoose((connectionState) => {
    if (connectionState === 'failed') {
        process.exit(0);

        return;
    }

    if (connectionState !== 'connected') {
        return;
    }

    const app = initialize();
    app.listen(port, () => {
        logger.info(`Application is running on the port ${port}`);
    });
});
