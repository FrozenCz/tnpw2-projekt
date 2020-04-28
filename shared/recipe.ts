import {IngredientModel} from "./ingredient.model";
import {IsArray, IsBoolean, IsDate, IsMongoId, IsString} from 'class-validator';

/**
 * trida reprezentujici recept
 * @author Milan Knop
 */
export class Recipe {
  @IsString()
  @IsMongoId()
  private _id: string;
  @IsString()
  private _name: string;
  @IsArray()
  private _ingredients?: IngredientModel[];
  @IsString()
  private _description: string;
  @IsBoolean()
  private _isPrivate: boolean;
  @IsString()
  @IsMongoId()
  private _owner: string;
  @IsDate()
  private _date: Date;
  @IsString()
  private _imagePath: string;


  constructor(id: string, name: string, description: string, ingredients: IngredientModel[], isPrivate: boolean, owner: string, date: Date, imagePath: string) {
    this._id = id;
    this._name = name;
    this._ingredients = ingredients;
    this._description = description;
    this._isPrivate = isPrivate;
    this._owner = owner;
    this._date = date;
    this._imagePath = imagePath;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }

  set ingredients(value: IngredientModel[]) {
    this._ingredients = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get isPrivate(): boolean {
    return this._isPrivate;
  }

  set isPrivate(value: boolean) {
    this._isPrivate = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }


  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }
}
