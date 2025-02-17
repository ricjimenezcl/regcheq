import { Injectable, NotFoundException,Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catalog, CatalogDocument } from './schemas/catalog.schema';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { CacheInterceptor,CacheKey,CacheTTL } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CatalogsRepository } from './catalogs.repository';
//import { InjectCacheManager } from '@nestjs/cache-manager';
//import { InjectCache } from '@nestjs/cache-manager';


@Injectable()
export class CatalogsService {
  constructor(@InjectModel(Catalog.name) private catalogModel: Model<CatalogDocument>, 
  private catalogsRepository: CatalogsRepository,) {}

  async create(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    return this.catalogModel.create(createCatalogDto);
  }

  @CacheKey('catalogs') 
  @CacheTTL(600)
  async findAll(): Promise<Catalog[]> {
    const cacheKey = 'catalogs';
    return this.catalogModel.find().exec();
  }

  async findOne(id: string): Promise<Catalog> {
    const catalog = await this.catalogModel.findById(id).exec();
    if (!catalog) {
      throw new NotFoundException(`Catalog with ID ${id} not found`);
    }
    return catalog;
  }

  async update(id: string, updateCatalogDto: UpdateCatalogDto): Promise<Catalog> {
    const catalog = await this.catalogModel.findByIdAndUpdate(id, updateCatalogDto, { new: true }).exec();
    if (!catalog) {
      throw new NotFoundException(`Catalog with ID ${id} not found`);
    }
    return catalog;
  }

  async remove(id: string): Promise<void> {
    const result = await this.catalogModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Catalog with ID ${id} not found`);
    }
  }
}
