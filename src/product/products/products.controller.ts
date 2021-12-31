import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @EventPattern('catalog/create_product')
  async create(createProductDto: CreateProductDto) {
    console.log(
      `[Controller] Product Controller received: ${createProductDto}`,
    );

    await this.productsService.create(createProductDto);
  }

  @MessagePattern('catalog/find_products')
  async findAll() {
    return this.productsService.findAll();
  }
}
