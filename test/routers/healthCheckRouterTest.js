import request from 'supertest';
import { expect } from 'chai';

import app from '@src/app';

describe('System Health Check', () => {
    it('Server is UP', async () => {
        const response = await request(app).get('/health-check');

        expect(response.status).eq(200);
        expect(response.headers['content-type']).eq('application/json; charset=utf-8');
        expect(response.body).not.null;
        expect(JSON.stringify(response.body)).eq(
            JSON.stringify({
                status: 'UP'
            })
        );
    });
});
