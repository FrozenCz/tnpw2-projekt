export enum EnumAmountType {
  g, kg, ml, l,ks
}

export class IngredientModel {
  private _name: string;
  private _amount: number;
  private _amount_type: EnumAmountType;

  constructor(name: string, amount: number, amountType: EnumAmountType) {
    this._name = name;
    this._amount = amount;
    this._amount_type = amountType;
  }


  get amount_type(): EnumAmountType {
    return this._amount_type;
  }

  set amount_type(value: EnumAmountType) {
    this._amount_type = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }
}
