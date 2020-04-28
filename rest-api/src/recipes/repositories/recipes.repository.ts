import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from '../../../../shared/user';
import {Recipe} from '../../../../shared/recipe';

@Injectable()
export class RecipesRepository {

  constructor(@InjectModel('User') private userModel: Model<User>, @InjectModel('Recipe') private recipeModel: Model<Recipe>) {
  }

  async addRecipe(recipe: Partial<Recipe>) {
    return 'creating recipe';
  }

}
