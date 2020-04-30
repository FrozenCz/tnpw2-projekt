import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpExceptionFilter} from './filter/http.filter';
import {FallbackExceptionFilter} from './filter/fallback.filter';
import * as mongoose from 'mongoose';
import {ValidationPipe} from '@nestjs/common';
import {ValidationFilter} from './filter/validation.filter';
import {ValidationException} from './filter/validation.exception';

mongoose.set('useFindAndModify', false);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalFilters(
    new FallbackExceptionFilter(),
    new HttpExceptionFilter(),
    new ValidationFilter());

  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    exceptionFactory: (errors ) => {

      const messages = errors.map(
        error =>`${error.property} má špatnou hodnotu ${error.value},
        ${Object.values(error.constraints).join(', ')} `
      )

      return new ValidationException(messages);

  }
  }))


  await app.listen(3000);
}
bootstrap();
