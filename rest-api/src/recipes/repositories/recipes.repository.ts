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
    return this.recipeModel.create(recipe)
  }

  async findAll(): Promise<Recipe[]>{
    let recipes: Model<Recipe>;
    recipes = this.recipeModel.find({isPrivate: false});
    return recipes;
  }

  async getRecipe(recipeId: string, userId?: string){
    if(userId) return this.recipeModel.findOne({_id: recipeId, owner: userId})
    return this.recipeModel.findOne({_id: recipeId, isPrivate:false})
  }

  async getUserRecipes(userId: string){
    return this.recipeModel.find({owner: userId})
  }

  async updateRecipe(recipe: Partial<Recipe>) {
    return this.recipeModel.findByIdAndUpdate({_id: recipe['_id']}, {
      name: recipe['_name'],
      ingredients: recipe['_ingredients'],
      imagePath: recipe['_imagePath'],
      isPrivate: recipe['_isPrivate'],
      description: recipe['_description']
    }, {new: true});
  }

  async deleteRecipe(recipeId: string){
    return this.recipeModel.deleteOne({_id: recipeId})
  }


}
