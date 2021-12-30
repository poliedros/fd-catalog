import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';

@Module({
  controllers: [ProductsController],
})
export class ProductModule {}
