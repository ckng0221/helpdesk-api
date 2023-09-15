import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MainModule } from '../../../src/main/main.module';

describe('MainController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('User routes', () => {
    it('Get users', () => {
      return request(app.getHttpServer()).get('/main/users').expect(200);
    });
    it('Create user', () => {
      return request(app.getHttpServer()).post('/main/users').expect(201);
    });
    it('Update user', () => {
      return request(app.getHttpServer()).patch('/main/users/1').expect(200);
    });
    it('Delete user', () => {
      return request(app.getHttpServer()).delete('/main/users/1').expect(200);
    });
  });
});
