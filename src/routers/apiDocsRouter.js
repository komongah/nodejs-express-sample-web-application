import { Router } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import config from '../app.config';

const { swaggerOptions = {} } = config.app;
const swaggerJsonDoc = swaggerJsDoc(swaggerOptions);

const swaggerJsonRouter = Router({ mergeParams: true });
const swaggerRouter = Router({ mergeParams: true });
const redocRouter = Router({ mergeParams: true });

swaggerJsonRouter.get('/', (req, res) => res.send(swaggerJsonDoc));
swaggerRouter.get('/', swaggerUi.setup(swaggerJsonDoc));
redocRouter.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../docs/sample-web-application-api-docs.html'))
);

export { swaggerJsonRouter, swaggerRouter, redocRouter };
