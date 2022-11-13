import request from 'supertest';
import { expect } from 'chai';
import { stub, restore } from 'sinon';
import { Strategy } from 'passport-http-bearer';

import { initialize } from '@src/app';
import * as oauth2Strategy from '@src/auth/strategies/oauth2.strategy';

describe('GET /health-check', () => {
    afterEach(() => {
        restore();
    });

    it('should be unauthorized without token', async () => {
        const app = initialize();

        const response = await request(app).get('/health-check');

        expect(response.status).eq(401);
        expect(response.body).to.eql({});
    });

    it('should be retrieved with fake token', async () => {
        stub(oauth2Strategy, 'OAuth2Strategy').returns(
            new Strategy((token, done) => {
                return done(null, {});
            })
        );

        const app = initialize();

        const response = await request(app).get('/health-check').set('Authorization', 'Bearer fake-token');
        expect(response.headers['content-type']).match(/json/);
        expect(response.status).eq(200);
    });
});
