import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_URL}/catalog`),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
