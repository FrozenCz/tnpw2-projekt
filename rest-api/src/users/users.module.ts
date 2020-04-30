import {Module} from "@nestjs/common";
import {UsersController} from "./controllers/users.controller";
import {MongooseModule} from "@nestjs/mongoose"
import {UsersSchema} from "./schemas/users.schema";
import {UsersRepository} from "./repositories/users.repository";
import {RecipesRepository} from '../recipes/repositories/recipes.repository';
import {RecipesModule} from '../recipes/recipes.module';
import {RecipesSchema} from '../recipes/schemas/recipes.schema';


@Module({
  imports: [
    RecipesModule,
    MongooseModule.forFeature([
        {
          name: "User", schema: UsersSchema,
        },
      {
        name: "Recipe", schema: RecipesSchema
      }
      ]
    )
  ],
  controllers: [UsersController],
  providers: [
    UsersRepository,
    RecipesRepository
  ]
})
export class UsersModule {

}
