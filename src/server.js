import app from './app';
import config from './app.config';

const port = config.app.port;

app.listen(port, () => {
    console.log(`Application is running on the port ${port}`);
});
