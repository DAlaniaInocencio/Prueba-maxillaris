import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5174'],
    methods: 'GET, POST, PUT, DELETE, PATCH',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
