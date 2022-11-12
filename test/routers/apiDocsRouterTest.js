import request from 'supertest';
import { expect } from 'chai';
import { restore } from 'sinon';

import { initialize } from '@src/app';
import config from '@src/app.config';

describe('GET /api-docs', () => {
    afterEach(() => {
        restore();
    });

    it('should be unauthorized without login', async () => {
        const app = initialize();

        const response = await request(app).get('/api-docs');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be unauthorized with wrong user info', async () => {
        const app = initialize();

        const fakeUsernamePassword = 'fake-username:fake-password';
        const fakeUsernamePasswordBase64 = new Buffer.from(fakeUsernamePassword).toString('base64');
        const response = await request(app)
            .get('/api-docs')
            .set('Authorization', `Basic ${fakeUsernamePasswordBase64}`);

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be retrieved with correct user info', async () => {
        const app = initialize();

        const { swaggerUiAuth } = config.auth;
        const fakeUsernamePassword = `${swaggerUiAuth.username}:${swaggerUiAuth.password}`;
        const fakeUsernamePasswordBase64 = new Buffer.from(fakeUsernamePassword).toString('base64');
        const response = await request(app)
            .get('/api-docs')
            .set('Authorization', `Basic ${fakeUsernamePasswordBase64}`);

        expect(response.status).eq(200);
        expect(response.body).not.null;
    });
});

describe('GET /api-docs-swagger/', () => {
    afterEach(() => {
        restore();
    });

    it('should be unauthorized without login', async () => {
        const app = initialize();

        const response = await request(app).get('/api-docs-swagger/');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be unauthorized with wrong user info', async () => {
        const app = initialize();

        const fakeUsernamePassword = 'fake-username:fake-password';
        const fakeUsernamePasswordBase64 = new Buffer.from(fakeUsernamePassword).toString('base64');
        const response = await request(app)
            .get('/api-docs-swagger/')
            .set('Authorization', `Basic ${fakeUsernamePasswordBase64}`);

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be retrieved with correct user info', async () => {
        const app = initialize();

        const { swaggerUiAuth } = config.auth;
        const fakeUsernamePassword = `${swaggerUiAuth.username}:${swaggerUiAuth.password}`;
        const fakeUsernamePasswordBase64 = new Buffer.from(fakeUsernamePassword).toString('base64');
        const response = await request(app)
            .get('/api-docs-swagger/')
            .set('Authorization', `Basic ${fakeUsernamePasswordBase64}`);

        expect(response.status).eq(200);
        expect(response.body).not.null;
    });
});

describe('GET /api-docs-swagger/swagger.json/', () => {
    afterEach(() => {
        restore();
    });

    it('should be unauthorized without login', async () => {
        const app = initialize();

        const response = await request(app).get('/api-docs-swagger/swagger.json/');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be unauthorized with wrong user info', async () => {
        const app = initialize();

        const fakeUsernamePassword = 'fake-username:fake-password';
        const fakeUsernamePasswordBase64 = new Buffer.from(fakeUsernamePassword).toString('base64');
        const response = await request(app)
            .get('/api-docs-swagger/swagger.json/')
            .set('Authorization', `Basic ${fakeUsernamePasswordBase64}`);

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be retrieved with correct user info', async () => {
        const app = initialize();

        const { swaggerUiAuth } = config.auth;
        const fakeUsernamePassword = `${swaggerUiAuth.username}:${swaggerUiAuth.password}`;
        const fakeUsernamePasswordBase64 = new Buffer.from(fakeUsernamePassword).toString('base64');
        const response = await request(app)
            .get('/api-docs-swagger/swagger.json/')
            .set('Authorization', `Basic ${fakeUsernamePasswordBase64}`);

        expect(response.status).eq(200);
        expect(response.body).not.null;
    });
});
