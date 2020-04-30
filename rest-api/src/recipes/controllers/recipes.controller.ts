import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  UnauthorizedException,
  Get,
  Param,
  Put,
  NotFoundException, Delete
} from '@nestjs/common';
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
  async createRecipe(@Request() req, @Body("recipe") recipe: Recipe) {
    const user = req.user;
    if(!user){
      return new UnauthorizedException();
    }

    const recipeToCreate: Partial<Recipe> = {
      name: recipe.name,
      description: recipe.description,
      isPrivate: recipe.isPrivate,
      imagePath:recipe.imagePath,
      ingredients:recipe.ingredients,
      owner: user._id,
      date: new Date()
    }

    return this.recipeDB.addRecipe(recipeToCreate)
  }

  @Put(":recipeId")
  @UseGuards(AuthenticationGuard)
  async updateRecipe(@Request() req, @Param('recipeId') recipeId: string, @Body("recipe") recipe: Recipe) {
    let userId = null;
    if(req.user && req.user._id) userId = req.user._id;
    const recipeInDb: Recipe = await this.recipeDB.getRecipe(recipeId, userId);

    if(!recipeInDb)
      return new NotFoundException('Recept nenalezen')

    if(userId != recipeInDb.owner)
      return new UnauthorizedException('Nepovolená úprava');

    return this.recipeDB.updateRecipe(recipe);

  }

  @Delete(":recipeId")
  @UseGuards(AuthenticationGuard)
  async deleteRecipe(@Request() req, @Param('recipeId') recipeId: string) {
    let userId = null;
    if(req.user && req.user._id) userId = req.user._id;
    const recipeInDb: Recipe = await this.recipeDB.getRecipe(recipeId, userId);

    if(!recipeInDb)
      return new NotFoundException('Recept nenalezen')

    if(userId != recipeInDb.owner)
      return new UnauthorizedException('Nepovolená úprava');

    return this.recipeDB.deleteRecipe(recipeId);

  }

  @Get()
  async getRecipes() {
    return this.recipeDB.findAll()
  }

  @Get('/user')
  @UseGuards(AuthenticationGuard)
  async getUserRecipes(@Request() req) {
    return this.recipeDB.getUserRecipes(req.user._id);
  }

  @Get(':recipeId')
  async getRecipe(@Request() req, @Param('recipeId') recipeId: string){
    let userId = null;
    if(req.user && req.user._id) userId = req.user._id;
    return this.recipeDB.getRecipe(recipeId, userId);
  }




}
