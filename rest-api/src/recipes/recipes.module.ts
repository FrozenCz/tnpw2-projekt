import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {RecipesController} from './controllers/recipes.controller';
import {RecipesSchema} from './schemas/recipes.schema';
import {UsersSchema} from '../users/schemas/users.schema';
import {RecipesRepository} from './repositories/recipes.repository';


@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: "Recipe", schema: RecipesSchema},
        {name: "User", schema: UsersSchema}
        ]
    )
  ],

controllers: [RecipesController],
  providers: [
    RecipesRepository
  ]
})

export class RecipesModule {

}
