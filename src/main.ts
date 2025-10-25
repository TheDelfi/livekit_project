import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMiddleware } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as path from 'path'
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as fs from 'fs'
const cookieParser = require('cookie-parser'); 



async function bootstrap() {
  
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '..', '192.168.0.36-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '..', '192.168.0.36.pem')),
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions: httpsOptions
  });

  app.enableCors({
    origin: ['http://localhost:7880', 'https://192.168.0.7:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })


  



  app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 5 минут
    max: 300,
    legacyHeaders: false

  }))


  app.use(cookieParser());
  app.setBaseViewsDir(path.join(__dirname, '..', 'template'))
  app.setViewEngine('ejs')

  app.useStaticAssets(path.join(__dirname, '..', 'static'), {
    prefix: '/static'
  })

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
