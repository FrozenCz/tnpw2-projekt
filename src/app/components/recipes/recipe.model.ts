import {IngredientModel} from "./ingredient.model";

interface ownerInterface {
  id: number, email: string
}

/**
 * trida reprezentujici recept
 * @author Milan Knop
 */
export class RecipeModel {
  private _id: number;
  private _name: string;
  private _ingredients?: IngredientModel[];
  private _description: string;
  private _isPrivate: boolean;
  private _owner: ownerInterface;
  private _date: Date;


  constructor(id: number, name: string, description: string, ingredients: IngredientModel[], isPrivate: boolean, owner: ownerInterface, date: Date) {
    this._id = id;
    this._name = name;
    this._ingredients = ingredients;
    this._description = description;
    this._isPrivate = isPrivate;
    this._owner = owner;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
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

  get owner(): ownerInterface {
    return this._owner;
  }

  set owner(value: ownerInterface) {
    this._owner = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
