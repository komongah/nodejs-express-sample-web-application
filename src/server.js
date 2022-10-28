import app from './app';
import config from './app.config';
import logger from './utils/logger';

const port = config.app.port;

app.listen(port, () => {
    logger.info(`Application is running on the port ${port}`);
});
