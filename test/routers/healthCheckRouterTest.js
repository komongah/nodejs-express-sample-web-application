import request from 'supertest';
import { expect } from 'chai';
import { stub, restore } from 'sinon';
import passport from 'passport';

import app from '@src/app';

describe('GET /health-check', () => {
    afterEach(() => {
        restore();
    });

    it('should be unauthorized without token', async () => {
        const response = await request(app).get('/health-check');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be retrieved with fake token', async (done) => {
        stub(passport, 'authenticate').returns(done(null, {}));

        const response = await request(app).get('/health-check');

        expect(response.status).eq(200);
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');
        expect(response.body).not.null;
        expect(JSON.stringify(response.body)).to.eql(
            JSON.stringify({
                status: 'UP'
            })
        );
    });
});
