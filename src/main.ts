import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`OI: ${process.env.REDIS_URL} ${process.env.MONGO_URL}`);

  const app = await NestFactory.create(AppModule);

  await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    },
  });

  app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
