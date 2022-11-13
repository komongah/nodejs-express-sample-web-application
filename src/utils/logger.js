import winston from 'winston';
import 'winston-daily-rotate-file';

import { name } from '../../package.json';
import appConfig from '../app.config';

const logger = winston.createLogger({
    level: appConfig.app.logLevel,
    format: winston.format.json(),
    defaultMeta: { service: name, timestamp: new Date().toISOString() },
    transports: [
        new winston.transports.DailyRotateFile({
            dirname: 'logs',
            filename: 'app-%DATE%.log',
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: false,
            maxSize: '30m',
            maxFiles: '10d'
        }),
        new winston.transports.DailyRotateFile({
            dirname: 'logs',
            filename: 'error-%DATE%.log',
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: false,
            maxSize: '30m',
            maxFiles: '10d'
        })
    ]
});

// If we're in development then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
}

export default logger;
