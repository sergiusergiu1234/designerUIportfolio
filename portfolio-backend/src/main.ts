import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })


  const config = new DocumentBuilder()
  .setTitle('Portfolio backend API')
  .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT'
  },
    'access-token')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  
  SwaggerModule.setup('api',app,document);
  
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();


