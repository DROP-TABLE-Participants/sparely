import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors();
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const config = new DocumentBuilder()
    .setTitle('Sparely API')
    .setDescription('API for Sparely')
    .setVersion('1.0')
    .addOAuth2({
      name: 'google',
      flows: {
        implicit: {
          authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
          scopes: { email: 'email', profile: 'profile' },
        },
      },
      type: 'oauth2',
      scheme: 'bearer',
    })
    .addTag('Users')
    .addTag('Campaigns')
    .addTag('Payments')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      'x-tokenName': 'id_token',
      oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
      persistAuthorization: true,
      initOAuth: {
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
    },
  });

  await app.listen(3000);
}
bootstrap();
