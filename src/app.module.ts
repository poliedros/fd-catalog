import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_URL}/catalog`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
