import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @EventPattern('catalog/create_product')
  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
  }
}
