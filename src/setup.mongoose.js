import mongoose from 'mongoose';
import config from './app.config';
import logger from './utils/logger';

function setupMongoose(callback) {
    mongoose.connect(config.app.db.connectionString, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        logger.info('Database connected successfully');

        callback('connected');
    });

    mongoose.connection.on('disconnected', () => {
        logger.info('Database connection is disconnected');

        callback('disconnected');
    });

    mongoose.connection.on('error', (err) => {
        if (err) {
            logger.error('Database connection failed', err);
        }

        callback('error');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGTERM', () => shutdownGraceful());
    process.on('SIGINT', () => shutdownGraceful());
}

function shutdownGraceful() {
    mongoose.connection.close(() => {
        logger.info('Database connection is disconnected since the app is terminated');

        process.exit(0);
    });
}

export { setupMongoose };
