import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {MONGO_CONNECTION} from "./constants";
import {GetUserMiddleware} from "./middleware/get-user.middleware";
import {UsersController} from "./users/controllers/users.controller";
import {RecipesModule} from "./recipes/recipes.module";
import {RecipesController} from "./recipes/controllers/recipes.controller";

@Module({
  imports: [
    UsersModule,
    RecipesModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {

    consumer
      .apply(GetUserMiddleware)
      .forRoutes(
        UsersController,
        RecipesController
      )
  }
}
