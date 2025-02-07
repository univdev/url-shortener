import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // MEMO: Authorization 설정이 필요한 경우 해당 설정값을 주석 해제 하세요.
    // allowedHeaders: ['Content-Type', 'Authorization'],
    origin: '*',
  });

  // Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('URL Shortener API')
    .setDescription('URL Shortener API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  // Global Prefix
  // app.setGlobalPrefix('api');
  // app.useGlobalInterceptors(new ResultInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
