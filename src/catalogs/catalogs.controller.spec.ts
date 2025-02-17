import { Test, TestingModule } from '@nestjs/testing';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';
import { CatalogsModule } from './catalogs.module';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('CatalogsController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CatalogsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return all catalogs', async () => {
    const response = await request(app.getHttpServer())
      .get('/catalogs')
      .expect(200);
    
    expect(response.body).toEqual([{ name: 'Catalog 1' }, { name: 'Catalog 2' }]);
  });

  afterAll(async () => {
    await app.close();
  });
});
