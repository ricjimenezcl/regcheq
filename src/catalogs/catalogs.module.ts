import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { Catalog, CatalogSchema } from './schemas/catalog.schema';
import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';
import { CatalogsRepository } from './catalogs.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogSchema }]),AuthModule],
  controllers: [CatalogsController],
  providers: [CatalogsService,CatalogsRepository],
})
export class CatalogsModule {}
