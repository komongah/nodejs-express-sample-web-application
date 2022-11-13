import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

describe('Setup DB', () => {
    let mongod;
    before(async () => {
        mongod = await MongoMemoryServer.create();

        const uri = mongod.getUri();

        await mongoose.connect(uri, { dbName: 'test-db' });
    });

    after(async () => {
        await mongoose.disconnect();

        await mongod.stop();
    });
});
