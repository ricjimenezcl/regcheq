import { Test, TestingModule } from '@nestjs/testing';
import { CatalogsService } from './catalogs.service';
import { CatalogsRepository } from './catalogs.repository'; // Asegúrate de que el repositorio esté inyectado
import { Catalog } from './schemas/catalog.schema';

describe('CatalogsService', () => {
  let service: CatalogsService;
  let mockCatalogRepository: CatalogsRepository;

  beforeEach(async () => {
    mockCatalogRepository = { 
      findAll: jest.fn().mockResolvedValue([{ name: 'Catalog 1' }, { name: 'Catalog 2' }]), 
    } as unknown as CatalogsRepository;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatalogsService,
        { provide: CatalogsRepository, useValue: mockCatalogRepository },
      ],
    }).compile();

    service = module.get<CatalogsService>(CatalogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of catalogs', async () => {
    const catalogs = await service.findAll();
    expect(catalogs).toEqual([{ name: 'Catalog 1' }, { name: 'Catalog 2' }]);
    //expect(mockCatalogRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
