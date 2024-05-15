import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3001;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('Backend API to access from Frontend')
    .setVersion('1.0')
    .build();

  const docuement = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, docuement);

  await app.listen(PORT);
  console.log('Backend started at port ' + PORT);
}
bootstrap();
