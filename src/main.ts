import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
import * as morgan from 'morgan';
import { AppModule } from './app.module';

const port = process.env.PORT || 8000;

const loggingMode = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan(loggingMode));
  // app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Helpdesk API 2')
    .setDescription('Helpdesk API, with revamped in NestJS')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
