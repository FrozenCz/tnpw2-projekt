import {Body, Controller, Post, UseGuards, Request, UnauthorizedException, Get} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose";
import {User} from '../../../../shared/user';
import {Recipe} from '../../../../shared/recipe';
import {RecipesRepository} from '../repositories/recipes.repository';
import {AuthenticationGuard} from "../../guards/authentication.guard";


@Controller("recipes")
export class RecipesController {

  constructor(@InjectModel('User') private userModel: Model<User>, @InjectModel('Recipe') private recipeModel: Model<Recipe>, private recipeDB: RecipesRepository) {
  }

  @Post()
  @UseGuards(AuthenticationGuard)
  async createRecipe(@Request() req, @Body("recipe") recipe: Partial<Recipe>) {
    const user = req.user;
    if(!user){
      return new UnauthorizedException();
    }
    recipe.owner = user._id;
    return this.recipeDB.addRecipe(recipe)
  }

  @Get()
  async getRecipes() {
    return this.recipeDB.findAll()
  }



}
