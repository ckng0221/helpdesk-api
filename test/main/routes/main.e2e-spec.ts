import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MainModule } from '../../../src/main/main.module';

const mongoConnection = 'mongodb://localhost:27017/helpdesk';

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

  afterAll(async () => {
    // await moduleFixture.close();
    // await app.close();
  });

  describe('User routes', () => {
    it('Get users', () => {
      return request(app.getHttpServer()).get('/main/users').expect(200);
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
    // it('Update user', () => {
    //   return request(app.getHttpServer()).patch('/main/users/1').expect(200);
    // });
    // it('Delete user', () => {
    //   return request(app.getHttpServer()).delete('/main/users/1').expect(200);
    // });
  });
});
