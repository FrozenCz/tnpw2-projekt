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
    return this.recipeModel.findOne({_id: recipeId, $or: [{isPrivate:false}, {owner: userId}]})
  }

  async getUserRecipes(userId: string){
    return this.recipeModel.find({owner: userId})
  }

  async deleteAllFromUser(userId: string){
    return this.recipeModel.deleteMany({owner: userId})
  }

  async updateRecipe(recipe: Recipe) {
    return this.recipeModel.findByIdAndUpdate({_id: recipe['_id']}, {
      name: recipe.name,
      ingredients: recipe.ingredients,
      imagePath: recipe.imagePath,
      isPrivate: recipe.isPrivate,
      description: recipe.description
    }, {new: true});
  }

  async deleteRecipe(recipeId: string){
    return this.recipeModel.deleteOne({_id: recipeId})
  }


}
