import request from 'supertest';
import { expect } from 'chai';
import { restore } from 'sinon';

import app from '@src/app';

describe('GET /api-docs', () => {
    afterEach(() => {
        restore();
    });

    it('should be unauthorized without login', async () => {
        const response = await request(app).get('/api-docs');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be unauthorized with wrong username or password', async () => {
        const response = await request(app).get('/api-docs').set('Authorization', 'Basic YWRtaW46cGFzc3dvcmY=');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be retrieved', async () => {
        const response = await request(app).get('/api-docs').set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');

        expect(response.status).eq(200);
        expect(response.body).not.null;
    });
});
