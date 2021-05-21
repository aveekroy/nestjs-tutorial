import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup starts
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('Create, Update, Get and Delete Tasks using this API')
    .setVersion('1.0.0')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, doc);

  // Checkout the swagger documentation: http://localhost:3000/api
  // Swagger setup ends

  await app.listen(3000);
}
bootstrap();

// NestJS - Postgres(installed locally on Mac)
