import {Body, Controller, Post} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose";
import {User} from '../../../../shared/user';
import {Recipe} from '../../../../shared/recipe';
import {RecipesRepository} from '../repositories/recipes.repository';


@Controller("recipes")
export class RecipesController {

  constructor(@InjectModel('User') private userModel: Model<User>, @InjectModel('Recipe') private recipeModel: Model<Recipe>, private recipeDB: RecipesRepository) {
  }

  @Post()
  async createRecipe(recipe: Partial<Recipe>) {
    return this.recipeDB.addRecipe(recipe)
  }

}
