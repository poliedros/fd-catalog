import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../schemas/product.schema';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  const productModel = jest
    .fn()
    .mockReturnValue({ save: jest.fn(), find: jest.fn() });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product.name),
          useValue: productModel,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
