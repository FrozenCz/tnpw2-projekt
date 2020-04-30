import {IngredientModel} from "./ingredient.model";
import {IsArray, IsBoolean, IsDate, IsMongoId, IsString, ValidateIf} from 'class-validator';

/**
 * trida reprezentujici recept
 * @author Milan Knop
 */
export class Recipe {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString()
  name: string;
  @IsArray()
  ingredients: IngredientModel[];
  @IsString()
  description: string;
  @IsBoolean()
  isPrivate: boolean;
  @IsString({always: false})
  @IsMongoId({always:false})
  owner?: string;
  date?: Date;
  @IsString()
  imagePath: string;


  constructor(id: string, name: string, description: string, ingredients: IngredientModel[], isPrivate: boolean, owner: string, date: Date, imagePath: string) {
    this._id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.description = description;
    this.isPrivate = isPrivate;
    this.owner = owner;
    this.date = date;
    this.imagePath = imagePath;
  }

  get id(): string {
    return this._id;
  }

}
