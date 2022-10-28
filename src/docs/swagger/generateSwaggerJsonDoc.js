import fs from 'fs';
import swaggerJSDoc from 'swagger-jsdoc';
import config from '../../app.config';

const { swaggerOptions = {} } = config.app;
const swaggerJsonDoc = swaggerJSDoc(swaggerOptions);
fs.writeFileSync('./docs/swagger.json', JSON.stringify(swaggerJsonDoc));
