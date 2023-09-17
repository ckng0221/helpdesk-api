/* eslint-disable @typescript-eslint/no-unused-vars */
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import 'dotenv/config';
import mongoose from 'mongoose';
import * as request from 'supertest';
import { MainModule } from '../../../src/main/main.module';
import { UserSchema } from '../../../src/main/schemas/user.schema';
// import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoConnection =
  process.env.MONGODB_CONNECTION_TEST ||
  'mongodb://127.0.0.1:27017/helpdesk-test';
// const mongod = new MongoMemoryServer();

describe('MainController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [MainModule, MongooseModule.forRoot(mongoConnection)],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeAll(async () => {
    // const mongod = await MongoMemoryServer.create();
    // const uri = mongod.getUri();
    // await mongoose.connect(uri, { dbName: 'verifyMASTER' });
    mongoose.connect(mongoConnection);
  });

  afterAll(async () => {
    // await moduleFixture.close();
    // await app.close();
    // await mongoose.disconnect();
    // await mongod.stop();
  });

  describe('User routes', () => {
    let testUser: any;
    beforeAll(async () => {
      // create test user
      const User = mongoose.model('User', UserSchema);
      testUser = new User();
      testUser.name = 'test_user';
      testUser.erp_name = 'test_user';
      testUser.email = 'test_user@email.com';
      testUser.save();
    });

    afterAll(async () => {});

    it('Get users', () => {
      return request(app.getHttpServer())
        .get('/main/users')
        .expect(200)
        .then((res) => {
          expect(res.body).toBeTruthy();
        });
    });

    it('Create user', () => {
      return request(app.getHttpServer())
        .post('/main/users')
        .send({
          erp_name: 'test_user',
          name: 'TestUser',
          email: 'test@email.com',
        })
        .expect(201);
    });

    it('Update user', () => {
      return request(app.getHttpServer())
        .patch(`/main/users/${testUser._id}`)
        .send({ name: 'TestUserMod' })
        .expect(200);
      // .then((res) => {
      //   console.log(res.body);
      // });
    });

    it('Delete user', () => {
      return request(app.getHttpServer())
        .delete(`/main/users/${testUser._id}`)
        .expect(200);
    });
  });
});
